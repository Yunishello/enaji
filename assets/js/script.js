function incrementProperty(propertySelector, numbersToAdd, countSpeed) {
    let property = document.querySelector(propertySelector);
    let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            let timelag;
            let finishNumber = numbersToAdd.reduce((a, b) => a + b, 0);
            let runningTotal = 0;

            for(let i = 0; i < numbersToAdd.length; i++) {
                timelag = i * countSpeed;
                setTimeout(() => {
                    runningTotal += numbersToAdd[i];
                    property.innerHTML = runningTotal;
                }, timelag);
            }
            observer.unobserve(property);
        }
    }, { threshold: 1.0 });

    observer.observe(property);
}

incrementProperty('#property1', [10, 20, 30, 100], 500);
incrementProperty('#property2', [40, 50, 60], 500);
incrementProperty('#property3', [70, 80, 90], 500);
incrementProperty('#property4', [70, 80, 20], 500);