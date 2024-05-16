import os, glob, shutil, inquirer, datetime

LIVE = "/var/www/html/live"
TARGET_FOLDERS = ["_next", "css", "img"]
URLS = ["palmilhasterapeuticas.com.br", "palmilhando.com.br"]

def select(id, msg, options):
    list = {inquirer.List(id, message=msg, choices=options)}
    input = inquirer.prompt(list)[id]
    return input

def get_dist():
    cwd = os.getcwd()
    parent_folder = cwd.split("/")[-1]
    if parent_folder == "dist":
        return cwd
    else:
        dist = glob.glob("./dist", recursive=True)
        if dist[0]:
            return dist[0].replace(".", cwd)
        else:
            print("Error: couldn't find a valid 'dist' directory.")
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
        print(os.popen(c).read())

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

dist = get_dist()
target = select(
    id="folder",
    msg="Select target directory",
    options=[f.path for f in os.scandir(LIVE) if f.is_dir()],
)
html = select(
    id="file",
    msg="Select target file",
    options=[f.split("/")[-1] for f in glob.glob(f"{dist}/*.html")],
)
url = select(id="url", msg="Deploy to where?", options=URLS)

print(os.popen("npx next build").read())
transfer_files(dist, target, html)
deploy(url)
exit(0)
