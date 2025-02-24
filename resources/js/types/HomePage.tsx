import { Hero } from "./Hero";
import { Insight } from "./Insight";

export interface HomePage {
    hero: Hero,
    insights: Insight[]
}