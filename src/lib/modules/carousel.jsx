'use client';
import React, {Children, useMemo} from "react";

const Carousel = ({
    children = [],
    visibleItemsCount = 1, // quantos items devem ser exibidos por vez?
    isInfinite, // o carrossel é infinito?
    withIndicator, // mostra indicador de elementos?
    className = undefined
}) => {
    const indicatorContainerRef = React.useRef(null);
    const [timeoutInProgress, setTimeoutInProgress] = React.useState(false); // confere se há uma pausa em andamento

    /**número total de elementos*/
    const originalItemsLength = React.useMemo(() => Children.count(children), [
        children
    ]);

    /**confere se o carrossel está repetindo um elemento*/
    const isRepeating = React.useMemo(
        () => isInfinite && Children.count(children) > visibleItemsCount,
        [children, isInfinite, visibleItemsCount]
    );

    /**índice do elemento em exibição*/
    const [currentIndex, setCurrentIndex] = React.useState(
        isRepeating ? visibleItemsCount : 0
    );

    /**confere se a transição est´á ativada*/
    const [isTransitionEnabled, setTransitionEnabled] = React.useState(true);

    /**armazena a posição inicial de toque para deslizamento*/
    const [touchPosition, setTouchPosition] = React.useState(null);

    React.useEffect(() => {
        if (isRepeating) {
            if (
                currentIndex === visibleItemsCount ||
                currentIndex === originalItemsLength
            ) {
                setTransitionEnabled(true);
            }
        }
    }, [currentIndex, isRepeating, visibleItemsCount, originalItemsLength]);

    React.useEffect(() => {
        if (withIndicator) {
            const active = indicatorContainerRef.current?.querySelector(".dots-active");
            if (active) {
                let index = active.getAttribute("data-index");
                if (index !== null && indicatorContainerRef.current?.scrollTo) {
                    indicatorContainerRef.current?.scrollTo({
                        left: ((Number(index) - 2) / 5) * 50,
                        behavior: "smooth"
                    });
                }
            }
        }
    }, [withIndicator, currentIndex]);

    /**avança para o próximo item*/
    const nextItem = () => {
        if (currentIndex > originalItemsLength) {
            setTimeoutInProgress(true);
        }
        if (isRepeating || currentIndex < originalItemsLength - visibleItemsCount) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    /**volta para o item anterior*/
    const previousItem = () => {
        const isOnEdgeBack = isRepeating ? currentIndex <= visibleItemsCount : currentIndex === 0;
        if (isOnEdgeBack) {
            setTimeoutInProgress(true);
        }
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    /** função de navegação por toque
     * @param e TouchEvent
    */
    const handleTouchMove = (e) => {
        const touchDown = touchPosition;
        if (touchDown === null) {
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
        if (diff > 5) {
            nextItem();
        }
        if (diff < -5) {
            previousItem();
        }
        setTouchPosition(null);
    };

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false);
                setCurrentIndex(originalItemsLength);
            } else if (currentIndex === originalItemsLength + visibleItemsCount) {
                setTransitionEnabled(false);
                setCurrentIndex(visibleItemsCount);
            }
        }
        setTimeoutInProgress(false);
    };

    /**insere novos itens atrás do item anterior*/
    const extraPreviousItems = React.useMemo(() => {
        let output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(Children.toArray(children)[originalItemsLength - 1 - index]);
        }
        output.reverse();
        return output;
    }, [children, originalItemsLength, visibleItemsCount]);

    /**insere novos itens à fente do próximo item*/
    const extraNextItems = React.useMemo(() => {
        let output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(Children.toArray(children)[index]);
        }
        return output;
    }, [children, visibleItemsCount]);

    const renderDots = React.useMemo(() => {
        let output = [];
        const localShow = isRepeating ? visibleItemsCount : 0;
        const localLength = isRepeating
            ? originalItemsLength
            : Math.ceil(originalItemsLength / visibleItemsCount);
        const calculatedActiveIndex =
            currentIndex - localShow < 0
                ? originalItemsLength + (currentIndex - localShow)
                : currentIndex - localShow;
        for (let index = 0; index < localLength; index++) {
            let className = "";
            if (calculatedActiveIndex === index) {
                className = "dots-active";
            } else {
                if (calculatedActiveIndex === 0) {
                    if (calculatedActiveIndex + index <= 2) {
                        className = "dots-close";
                    } else {
                        className = "dots-far";
                    }
                } else if (calculatedActiveIndex === localLength - 1) {
                    if (Math.abs(calculatedActiveIndex - index) <= 2) {
                        className = "dots-close";
                    } else {
                        className = "dots-far";
                    }
                } else {
                    if (Math.abs(calculatedActiveIndex - index) === 1) {
                        className = "dots-close";
                    } else {
                        className = "dots-far";
                    }
                }
            }
            output.push(<div key={index} data-index={index} className={className} />);
        }
        return output;
    }, [currentIndex, isRepeating, originalItemsLength, visibleItemsCount]);

    const isNextButtonVisible = useMemo(() => {
        return (
            isRepeating || currentIndex < originalItemsLength - visibleItemsCount
        );
    }, [isRepeating, currentIndex, originalItemsLength, visibleItemsCount]);

    const isPrevButtonVisible = useMemo(() => isRepeating || currentIndex > 0, [
        isRepeating,
        currentIndex
    ]);

    return (
        <div className={className}>
            <div className={`carousel-wrapper`}>
                {isPrevButtonVisible ? (
                    <button
                        disabled={timeoutInProgress}
                        style={{
                            cursor: timeoutInProgress ? "not-allowed" : "pointer",
                            pointerEvents: timeoutInProgress ? "none" : "inherit"
                        }}
                        onClick={previousItem}
                        className="left-arrow-button"
                    >
                        <span className="left-arrow" />
                    </button>
                ) : null}
                <div className={`carousel-content-wrapper`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div
                        className={`carousel-content *:w-[calc(100% / ${visibleItemsCount})]`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`,
                            transition: !isTransitionEnabled ? "none" : undefined
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {isRepeating && extraPreviousItems}
                        {children.map((i, k) => 
                            <div key={k} className='w-full h-auto'>{i}</div>
                        )}
                        {isRepeating && extraNextItems}
                    </div>
                </div>
                {isNextButtonVisible ? (
                    <button
                        disabled={timeoutInProgress}
                        style={{
                            cursor: timeoutInProgress ? "not-allowed" : "pointer",
                            pointerEvents: timeoutInProgress ? "none" : "inherit"
                        }}
                        onClick={nextItem}
                        className="right-arrow-button"
                    >
                        <span className="right-arrow" />
                    </button>
                ) : null}
            </div>
            {withIndicator && <div ref={indicatorContainerRef} className={`indicator-container `}>{renderDots}</div>}
        </div>
    );
};

export default Carousel;