class Follower {
constructor(stage, color ){
    this.removeDelay=400;
    this.points= [];
    this.stage=stage;
    this.color=color;
    this.line=document.createElementNS

    this.line.style.fill=this.color;
    this.stage.appendChild(this.line);
    window.requestAnimationFrame(() => this.trim());
}
}