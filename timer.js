class Timer {
    constructor(duration, btnStart, btnPause, callbacks) {
        this.duration = duration
        this.btnStart = btnStart
        this.btnPause = btnPause

        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        this.btnStart.addEventListener('click', this.start)
        this.btnPause.addEventListener('click', this.pause)
    }
    start = () => {
        if (this.onStart){
            this.onStart(this.durTime)
        }
        this.tick()
        this.interval = setInterval(this.tick, 50)
    }

    pause = () => {
        clearInterval(this.interval)
    }
    tick = () => {
        if (this.durTime <= 0) {
            this.pause()
            if (this.onComplete){
                this.onComplete()
            }
        }
        else {
            this.durTime = this.durTime - 0.05
            if (this.onTick){
                this.onTick(this.durTime)
            }
        }
    }

    get durTime() {
        return parseFloat(this.duration.value)
    }

    set durTime(time) {
        this.duration.value = time.toFixed(2)
    }
}
