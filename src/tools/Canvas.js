import { createContext } from "react";

class WellnessWheel {
    //Creates an empty wellness wheel 
    constructor(height, width)
    {
        this.width = width;
        this.height =  height;

        this.r = this.height/2*0.6;
        this.backgroundCanvas = document.createElement("CANVAS");
        this.backgroundctx = this.backgroundCanvas.getContext('2d');
        this.backgroundctx.canvas.width = width;
        this.backgroundctx.canvas.height = height;

        this.foregroundCanvas = document.createElement("CANVAS");
        this.foregroundctx = this.foregroundCanvas.getContext('2d');
        this.parent = document.getElementById("canvas-holder");
        this.parent.appendChild(this.backgroundCanvas);
        this.drawBackground();
    }
        drawBackground = () => {
            this.backgroundctx.beginPath();
            this.backgroundctx.lineWidth = this.height/300;
            this.backgroundctx.arc(this.width/2, this.height/2, this.r, 0, 2* Math.PI, false)
            this.backgroundctx.stroke();
            this.backgroundctx.closePath();
            for (let i = 0; i < 6; i++)
            {
                this.backgroundctx.beginPath();
                this.backgroundctx.moveTo(this.width/2, this.height/2);
                let polarx = this.width/2 + this.r * 1.05 * Math.sin(i/6 * 2 * Math.PI)
                let polary = this.height/2 - this.r * 1.05 * Math.cos(i/6 * 2 * Math.PI)
                this.backgroundctx.lineTo(polarx, polary);
                this.backgroundctx.stroke();
                this.backgroundctx.closePath();
                this.backgroundctx.restore();
            }
            for (let i = 0; i < 36; i++)
            {
                this.eraseArc(i);
            }
        }
        eraseArc = (sliceIndex) => {
            this.backgroundctx.save();
            
            this.backgroundctx.lineWidth = 1;
            this.backgroundctx.lineStyle = 'rgb(255,255,255)';

            this.backgroundctx.beginPath();
            this.backgroundctx.moveTo(this.width/2, this.height/2);
            let polarx = this.width/2 + 0.99*this.r * Math.sin(sliceIndex/36 * 2 * Math.PI)
            let polary = this.height/2 - 0.99*this.r * Math.cos(sliceIndex/36 * 2 * Math.PI)
            let angle1 = sliceIndex/36 * 2 * Math.PI - 2 * Math.PI / 4;
            let angle2 = (sliceIndex+1)/36 * 2 * Math.PI - 2 * Math.PI / 4;

            this.backgroundctx.lineTo(polarx, polary);
            this.backgroundctx.arc(this.width/2, this.height/2, 0.99*this.r, angle1, angle2, false)
            this.backgroundctx.lineTo(this.width/2, this.height/2);
            this.backgroundctx.stroke();
            this.backgroundctx.clip();
            this.backgroundctx.clearRect(0, 0, this.width, this.height);

            this.backgroundctx.restore();
        }
        drawFilledArc = (sliceIndex, color, radius) => {
            //Some stuff to fix pre-drawing
            this.eraseArc(sliceIndex);

            this.backgroundctx.lineWidth = 1;
            this.backgroundctx.lineStyle = 'rgb(255,255,255)';
            this.backgroundctx.beginPath();
            this.backgroundctx.moveTo(this.width/2, this.height/2);
            let polarx = this.width/2 + 0.99*radius * Math.sin(sliceIndex/36 * 2 * Math.PI)
            let polary = this.height/2 - 0.99*radius * Math.cos(sliceIndex/36 * 2 * Math.PI)
            let angle1 = sliceIndex/36 * 2 * Math.PI - 2 * Math.PI / 4;
            let angle2 = (sliceIndex+1)/36 * 2 * Math.PI - 2 * Math.PI / 4;
            
            this.backgroundctx.lineTo(polarx, polary);
            this.backgroundctx.arc(this.width/2, this.height/2, 0.99*radius, angle1, angle2, false)
            this.backgroundctx.lineTo(this.width/2, this.height/2);
            this.backgroundctx.stroke();
            this.backgroundctx.fillStyle = color;
            this.backgroundctx.fill();
            this.backgroundctx.closePath();

        }
        erasePercentage = (sliceIndex) => {
            this.backgroundctx.save();
            this.backgroundctx.translate(this.width/2, this.height/2);
            this.backgroundctx.rotate(((sliceIndex + sliceIndex + 1)/2)/36 * 2 * Math.PI + Math.PI);
            this.backgroundctx.clearRect(-20, this.r*1.02, 40, 40);
            this.backgroundctx.restore();
        }
        drawPercentage = (sliceIndex, percentage) => {
            this.erasePercentage(sliceIndex);
            this.backgroundctx.save();
            this.backgroundctx.translate(this.width/2, this.height/2);
            let angle1 = ((sliceIndex + sliceIndex + 1)/2)/36 * 2 * Math.PI + Math.PI;
            this.backgroundctx.rotate(angle1);
            this.backgroundctx.fillStyle = "white";
            this.backgroundctx.textAlign = "center";
            this.backgroundctx.textBaseline = "middle";
            this.backgroundctx.font = "22px Consolas";
            this.backgroundctx.translate(0, this.r*1.1);
            if (angle1 < 0 || angle1 > Math.PI)
                this.backgroundctx.rotate(Math.PI);
            this.backgroundctx.fillText(percentage, 0, 0);
            this.backgroundctx.restore();
        }
}
class WWAPI {
    constructor(width, height) {
        this.canvas = new WellnessWheel(width, height);
        this.colors = {
            "Physical": "#ff0000",
            "Financial": "#FFD23F",
            "Intellectual": "#119DA4",
            "Emotional": "#F67E7D",
            "Social": "#0EAD69",
            "Spiritual": "#540D6E",
        }
        this.indexMultiplier = {
            "Physical": 0,
            "Financial": 1,
            "Intellectual": 2,
            "Emotional": 3,
            "Social": 4,
            "Spiritual": 5,
        }
    }
    
    drawFilledArc = (category, questionIndex, value) => {
        console.log("This works DrawFilledArc");
        this.canvas.drawFilledArc(this.indexMultiplier[category] * 6 + questionIndex, this.colors[category], value/100 * this.canvas.height/2*0.6);
        this.canvas.drawPercentage(this.indexMultiplier[category] * 6 + questionIndex, value)
    }
}

export {WWAPI, WellnessWheel}