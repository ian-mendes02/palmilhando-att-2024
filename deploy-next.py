import os, shutil, inquirer, datetime, re, sys, subprocess

LIVE = "/var/www/html/live"
TARGET_FOLDERS = ["_next", "css", "img"]
IGNORE_LIST = [".git", "api", "archive", "_next", "img", "css", "node_modules"]
URLS = ["palmilhasterapeuticas.com.br", "palmilhando.com.br"]
cwd = sys.argv[1]

def select(id, msg, options):
    list = {inquirer.List(id, message=msg, choices=options)}
    input = inquirer.prompt(list)[id]
    return input

def get_dist():
    if os.path.exists(cwd):
        parent_folder = cwd.split("/")[-1]
        if parent_folder == "dist":
            return cwd
        else:
            dist = ''
            for file in os.scandir(cwd):
                if re.search(r"\bdist\b", file.path):
                    dist = os.path.join(cwd, file)
            if dist != '':
                return dist
            else:
                print("Error: couldn't find a valid 'dist' directory.")
                exit()
    else:
        print("Error: Invalid path.")
        exit()

def deploy(url):
    time = datetime.datetime.now()
    date = time.strftime("%c")
    cmd = [
        "git add .",
        f"git commit -m 'deployment - {date}'",
        "git push origin main",
        f"ssh -p '65002' 'u232384656@62.72.62.21' \"cd domains/{url}/public_html; git stash; git pull; git stash pop; exit\"",
    ]
    for c in cmd: 
        process = subprocess.Popen(c, stdout=subprocess.PIPE, stderr=None, shell=True)
        out = process.communicate()
        print(out[0])

def transfer_files(dist, target, html):
    for folder in TARGET_FOLDERS:
        old = os.path.join(target, folder)
        new = os.path.join(dist, folder)
        try:
            if os.path.exists(old):
                shutil.rmtree(old)
            os.mkdir(old)
            shutil.copytree(new, old, dirs_exist_ok=True)

            old_html = os.path.join(target, "index.html")
            if os.path.exists(old_html):
                os.remove(old_html)
            new_html = shutil.copy(os.path.join(dist, html), target)
            os.rename(new_html, f"{target}/index.html")
        except:
            print(f"Error: unable to transfer {old}")
            exit()
            
def get_targets():
    folders = [f.path for f in os.scandir(LIVE) if f.is_dir()]
    subfolders = []
    for folder in folders:
        for f in os.scandir(folder):
            basename = f.path.split("/")[-1]
            if f.is_dir() and not (basename in IGNORE_LIST):
                subfolders.append(f.path)
    return subfolders

dist = get_dist()

target = select(
    id="folder",
    msg="Select target directory",
    options=get_targets(),
)

html = select(
    id="file",
    msg="Select target file",
    options=[f.path.split("/")[-1] for f in os.scandir(dist) if f.path.endswith(".html")],
)

url = select(id="url", msg="Deploy to where?", options=URLS)

print("Running 'npx next build'...")
print(os.popen("npx next build").read())

print("Copying dist files...")
transfer_files(dist, target, html)

print("Deploying changes...")
deploy(url)

print("Done!")
exit(0)