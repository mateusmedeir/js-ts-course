function createCalculator() {
    return {
        display: document.querySelector('.display'),
        
        start() {
            this.clickButtons();
            this.pressEnter();
        },
        
        pressEnter() {
            this.display.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    this.doCalculation();
                }
            });
        },

        doCalculation() {
            let account = this.display.value;

            try {
                account = eval(account);

                if (!account) {
                    alert('Invalid account');
                    return;
                }
                this.display.value = String(account);
            } catch (error) {
                alert('Invalid account');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickButtons() {
            document.addEventListener('click', event => {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.displayButton(element.innerText);
                }
                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (element.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (element.classList.contains('btn-eq')) {
                    this.doCalculation();
                }
            });
        },
        displayButton(value) {
            this.display.value += value;
            this.display.focus();
        }
    };
}

const calculator = createCalculator();
calculator.start();