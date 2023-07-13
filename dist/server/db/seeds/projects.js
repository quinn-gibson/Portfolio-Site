"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.seed = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex('projects').del();
        yield knex('projects').insert([
            {
                id: 1,
                name: 'Quiz Master',
                description: "Created with passion by our team, this app combines the nostalgia of classic arcade games with the intellectual challenge of a true or false quiz. Dive into a captivating virtual arcade filled with vibrant graphics and retro sounds, where you'll put your knowledge to the test. Get one right? Move onto the next. Get one wrong? Game OVER!",
                img: 'n/a',
                link: 'n/a',
            },
            {
                id: 2,
                name: 'Love Calulator',
                description: "Whether you're curious about a crush, a new relationship, or simply intrigued by the dynamics between two individuals, Love Calculator has got you covered. Simply enter the names of two people, and within seconds, the app will generate a compatibility percentage accompanied by a short compatibility statement",
                img: 'n/a',
                link: 'n/a',
            },
            {
                id: 3,
                name: 'Website Colour Palette',
                description: 'Website Colour Palette is your ultimate companion for exploring a range of colours and their impact on website templates. With a dynamic playground and a user-friendly interface, experiment with various color combinations, observe their effects on different elements, and effortlessly find the perfect palette to capture the essence of your vision.',
                img: 'n/a',
                link: 'n/a',
            },
        ]);
    });
};
