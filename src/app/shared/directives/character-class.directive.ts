import { Directive, Input, Renderer2, OnInit, ElementRef } from '@angular/core';

export interface Class {
    id: number;
    mask: number;
    powerType: string;
    name: string;
    color: string;
}

@Directive({
    selector: '[charClass]'
})
export class CharacterClassDirective implements OnInit {
    @Input() charId: number;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'color', classes[this.charId - 1].color)
    }

}

export let classes: Class[] = [
    {
        id: 1,
        mask: 1,
        powerType: "rage",
        name: "Warrior",
        color: "#C79C6E"
    }, {
        id: 2,
        mask: 2,
        powerType: "mana",
        name: "Paladin",
        color: "#F58CBA"
    }, {
        id: 3,
        mask: 4,
        powerType: "focus",
        name: "Hunter",
        color: "#ABD473"
    }, {
        id: 4,
        mask: 8,
        powerType: "energy",
        name: "Rogue",
        color: "#FFF569"
    }, {
        id: 5,
        mask: 16,
        powerType: "mana",
        name: "Priest",
        color: "#FFFFFF"
    }, {
        id: 6,
        mask: 32,
        powerType: "runic-power",
        name: "Death Knight",
        color: "#C41F3B"
    }, {
        id: 7,
        mask: 64,
        powerType: "mana",
        name: "Shaman",
        color: "#0070DE"
    }, {
        id: 8,
        mask: 128,
        powerType: "mana",
        name: "Mage",
        color: "#40C7EB"
    }, {
        id: 9,
        mask: 256,
        powerType: "mana",
        name: "Warlock",
        color: "#8787ED"
    }, {
        id: 10,
        mask: 512,
        powerType: "energy",
        name: "Monk",
        color: "#00FF96"
    }, {
        id: 11,
        mask: 1024,
        powerType: "mana",
        name: "Druid",
        color: "#FF7D0A"
    }, {
        id: 12,
        mask: 2048,
        powerType: "fury",
        name: "Demon Hunter",
        color: "#A330C9"
    }
]