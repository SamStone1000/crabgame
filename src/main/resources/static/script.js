"use strict";

const colors = ["Brown", "Purple", "Orange", "Red", "Green", "Blue", "Yellow", "White"];
const varColors = ["Black", "Magenta", "Cream", "Pink", "Lime", "Turqoise", "Gold", "Gray"];
const patterns = ["None", "Solid Full Body", "Stripes", "Spots", "Gradient", "Scattering", "Cheetah Spots", "Rings", "Turtle", "Solid Half Body", "Solid Limbs", "Highlights", "Spirals", "Emoji", "Vertical Gradient", "Paint Splatter", "Stars and Sparkles", "Nonagon"];

class Crab{

    constructor(a1, a2, a3, a4, b1, b2, b3, b4, b5, c1, c2, c3, c4, d1, d2, d3, d4, d5, parent1, parent2){
        
        //GENES
        this.a1 = a1; //Color Red
        this.a2 = a2; //Color Blue
        this.a3 = a3; //Color Yellow
        this.a4 = a4; //Color Variance(R)
        this.b1 = b1; //Pattern Visible(R)
        this.b2 = b2; //Pattern Stripes(R)
        this.b3 = b3; //Pattern Spots(R)
        this.b4 = b4; //Pattern Gradient(R)
        this.b5 = b5; //Pattern Scattering(R)
        this.c1 = c1; //P.Color Red
        this.c2 = c2; //P.Color Blue
        this.c3 = c3; //P.Color Yellow
        this.c4 = c4; //P.Color Variance(R)
        this.d1 = d1; //Battle Tier +1(R)
        this.d2 = d2; //Battle Tier +1(R)
        this.d3 = d3; //Battle Tier +1(R)
        this.d4 = d4; //Battle Tier +1(R)
        this.d5 = d5; //Battle Tier +1(R)
        
        //TRAITS
        this.color = this.colorFind();
        this.pattern = this.patternFind();
        this.pColor = this.pColorFind();
        this.tier = this.tierFind();

        //INFO
        this.parent1 = parent1;
        this.parent2 = parent2;
        if(this.a4[0] || this.a4[1]) this.clist = colors;
        else this.clist = varColors;
        if(this.c4[0] || this.c4[1]) this.plist = colors;
        else this.plist = varColors;

    };

    colorFind(){

        let c1 = (this.a1[0] || this.a1[1]);
        let c2 = (this.a2[0] || this.a2[1]);
        let c3 = (this.a3[0] || this.a3[1]);

        if(c1){
            if(c2){
                if(c3){
                    return 0;
                } else{
                    return 1;
                };
            } else{
                if(c3){
                    return 2;
                } else{
                    return 3;
                };
            };
        } else{
            if(c2){
                if(c3){
                    return 4;
                } else{
                    return 5;
                };
            } else{
                if(c3){
                    return 6;
                } else{
                    return 7;
                };
            };
        };

        return -1;

    };

    pColorFind(){

        let c1 = (this.c1[0] || this.c1[1]);
        let c2 = (this.c2[0] || this.c2[1]);
        let c3 = (this.c3[0] || this.c3[1]);

        if(c1){
            if(c2){
                if(c3){
                    return 0;
                } else{
                    return 1;
                };
            } else{
                if(c3){
                    return 2;
                } else{
                    return 3;
                };
            };
        } else{
            if(c2){
                if(c3){
                    return 4;
                } else{
                    return 5;
                };
            } else{
                if(c3){
                    return 6;
                } else{
                    return 7;
                };
            };
        };

        return -1;

    };

    patternFind(){

        let p1 = (this.b1[0] || this.b1[1]); //Visible
        let p2 = !(this.b2[0] || this.b2[1]); //Stripes
        let p3 = !(this.b3[0] || this.b3[1]); //Spots
        let p4 = !(this.b4[0] || this.b4[1]); //Gradient
        let p5 = !(this.b5[0] || this.b5[1]); //Scattering

        if(p1){
            if(p2 && p3 && p4 && p5) return 17;
            else return 0;
        } else{
            if(p2){
                if(p3){
                    if(p4){
                        if(p5){
                            return 16;
                        } else{
                            return 12;
                        };
                    } else{
                        if(p5){
                            return 13;
                        } else{
                            return 6;
                        };
                    };
                } else{
                    if(p4){
                        if(p5){
                            return 14;
                        } else{
                            return 7;
                        };
                    } else{
                        if(p5){
                            return 8;
                        } else{
                            return 2;
                        };
                    };
                };
            } else{
                if(p3){
                    if(p4){
                        if(p5){
                            return 15;
                        } else{
                            return 9;
                        };
                    } else{
                        if(p5){
                            return 10;
                        } else{
                            return 3;
                        };
                    };
                } else{
                    if(p4){
                        if(p5){
                            return 11;
                        } else{
                            return 4;
                        };
                    } else{
                        if(p5){
                            return 5;
                        } else{
                            return 1;
                        };
                    };
                };
            };
        };

        return -1;

    };

    tierFind(){

        let t1 = !(this.d1[0] || this.d1[1]);
        let t2 = !(this.d2[0] || this.d2[1]);
        let t3 = !(this.d3[0] || this.d3[1]);
        let t4 = !(this.d4[0] || this.d4[1]);
        let t5 = !(this.d5[0] || this.d5[1]);

        return 1 + t1 + t2 + t3 + t4 + t5;

    };

};

function rando(input){
    let output = input[Math.floor(Math.random() * 2)];
    return output;
};

function breed(n1, n2){
    let p1 = clist[n1];
    let p2 = clist[n2];

    let g1 = [p1.a1, p1.a2, p1.a3, p1.a4, p1.b1, p1.b2, p1.b3, p1.b4, p1.b5, p1.c1, p1.c2, p1.c3, p1.c4, p1.d1, p1.d2, p1.d3, p1.d4, p1.d5];
    let g2 = [p2.a1, p2.a2, p2.a3, p2.a4, p2.b1, p2.b2, p2.b3, p2.b4, p2.b5, p2.c1, p2.c2, p2.c3, p2.c4, p2.d1, p2.d2, p2.d3, p2.d4, p2.d5];
    let g = [];

    for(let i = 0; i < g1.length; i++){
        g.push([rando([g1[i][0], g2[i][1]]), rando([g1[i][1], g2[i][0]])]);
    };

    let child = new Crab(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15],g[16],g[17],n1,n2);
    clist.push(child);
};

function textUpdate(){
    let output = "";
    for(let i = 0; i < clist.length; i++){
        let entry = clist[i];
        //output += i + ": [" + entry.a1 + "] [" + entry.a2 + "] [" + entry.a3 + "] " + entry.clist[entry.color] + " (" + entry.parent1 + "+" + entry.parent2 + ")" + "<br>";
        output += i + ": " + entry.clist[entry.color] + ", " + entry.plist[entry.pColor] + " " + patterns[entry.pattern] + ", battle tier " + entry.tier + ", parents = " + entry.parent1 + "&" + entry.parent2 + "<br>" +
                  "color genes: [" + entry.a1 + "] [" + entry.a2 + "] [" + entry.a3 + "] [" + entry.a4 + "]<br>" +
                  "pattern genes: [" + entry.b1 + "] [" + entry.b2 + "] [" + entry.b3 + "] [" + entry.b4 + "] [" + entry.b5 + "]<br>" +
                  "pattern color genes: [" + entry.c1 + "] [" + entry.c2 + "] [" + entry.c3 + "] [" + entry.c4 + "]<br>" +
                  "battle tier genes: [" + entry.d1 + "] [" + entry.d2 + "] [" + entry.d3 + "] [" + entry.d4 + "] [" + entry.d5 + "]<br>" +
                  "<br>";
    };
    document.getElementById("output").innerHTML = output;
};

//const basic = new Crab(/*color*/[1,1],[0,0],[0,0],[1,1],/*pattern*/[1,1],[1,1],[1,1],[1,1],[1,1],/*p.color*/[0,0],[0,0],[0,0],[1,1],/*tier*/[1,1],[1,1],[1,1],[1,1],[1,1],null,null);
const clist = [];

textUpdate();
