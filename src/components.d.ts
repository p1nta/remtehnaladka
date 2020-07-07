/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, } from "@stencil/router";
import { IFilters, } from "./components/tab-slider/tab-slider";
import { IFilters as IFilters1, ISlideFilter, } from "./components/tab-slider/tab-slider";
export namespace Components {
    interface NiceAnim {
    }
    interface ProgImg {
        "class"?: string;
        "placeHolder": string;
        "src": string;
    }
    interface RemtehAdvantages {
    }
    interface RemtehBottom {
    }
    interface RemtehCase {
        "case": string;
    }
    interface RemtehClients {
    }
    interface RemtehContacts {
    }
    interface RemtehDirections {
    }
    interface RemtehHeader {
        "mode": "Home" | "Projects" | "Case";
    }
    interface RemtehHome {
    }
    interface RemtehMainProjects {
    }
    interface RemtehProjects {
        "match": MatchResults;
    }
    interface RemtehRoot {
    }
    interface RemtehSelect {
        "onSelect": (value: IFilters) => void;
        "options": IFilters[];
        "selectedOption": IFilters;
    }
    interface RemtehTop {
        "class": string;
    }
    interface RemtehWhatWeDo {
    }
    interface RemtehWhyTrust {
    }
    interface TabBar {
        "onChangeTab": (value: IFilters) => void;
        "selectedTab": IFilters;
        "tabs": IFilters[];
    }
    interface TabSlider {
        "slides": ISlideFilter;
        "tabs": IFilters[];
    }
}
declare global {
    interface HTMLNiceAnimElement extends Components.NiceAnim, HTMLStencilElement {
    }
    var HTMLNiceAnimElement: {
        prototype: HTMLNiceAnimElement;
        new (): HTMLNiceAnimElement;
    };
    interface HTMLProgImgElement extends Components.ProgImg, HTMLStencilElement {
    }
    var HTMLProgImgElement: {
        prototype: HTMLProgImgElement;
        new (): HTMLProgImgElement;
    };
    interface HTMLRemtehAdvantagesElement extends Components.RemtehAdvantages, HTMLStencilElement {
    }
    var HTMLRemtehAdvantagesElement: {
        prototype: HTMLRemtehAdvantagesElement;
        new (): HTMLRemtehAdvantagesElement;
    };
    interface HTMLRemtehBottomElement extends Components.RemtehBottom, HTMLStencilElement {
    }
    var HTMLRemtehBottomElement: {
        prototype: HTMLRemtehBottomElement;
        new (): HTMLRemtehBottomElement;
    };
    interface HTMLRemtehCaseElement extends Components.RemtehCase, HTMLStencilElement {
    }
    var HTMLRemtehCaseElement: {
        prototype: HTMLRemtehCaseElement;
        new (): HTMLRemtehCaseElement;
    };
    interface HTMLRemtehClientsElement extends Components.RemtehClients, HTMLStencilElement {
    }
    var HTMLRemtehClientsElement: {
        prototype: HTMLRemtehClientsElement;
        new (): HTMLRemtehClientsElement;
    };
    interface HTMLRemtehContactsElement extends Components.RemtehContacts, HTMLStencilElement {
    }
    var HTMLRemtehContactsElement: {
        prototype: HTMLRemtehContactsElement;
        new (): HTMLRemtehContactsElement;
    };
    interface HTMLRemtehDirectionsElement extends Components.RemtehDirections, HTMLStencilElement {
    }
    var HTMLRemtehDirectionsElement: {
        prototype: HTMLRemtehDirectionsElement;
        new (): HTMLRemtehDirectionsElement;
    };
    interface HTMLRemtehHeaderElement extends Components.RemtehHeader, HTMLStencilElement {
    }
    var HTMLRemtehHeaderElement: {
        prototype: HTMLRemtehHeaderElement;
        new (): HTMLRemtehHeaderElement;
    };
    interface HTMLRemtehHomeElement extends Components.RemtehHome, HTMLStencilElement {
    }
    var HTMLRemtehHomeElement: {
        prototype: HTMLRemtehHomeElement;
        new (): HTMLRemtehHomeElement;
    };
    interface HTMLRemtehMainProjectsElement extends Components.RemtehMainProjects, HTMLStencilElement {
    }
    var HTMLRemtehMainProjectsElement: {
        prototype: HTMLRemtehMainProjectsElement;
        new (): HTMLRemtehMainProjectsElement;
    };
    interface HTMLRemtehProjectsElement extends Components.RemtehProjects, HTMLStencilElement {
    }
    var HTMLRemtehProjectsElement: {
        prototype: HTMLRemtehProjectsElement;
        new (): HTMLRemtehProjectsElement;
    };
    interface HTMLRemtehRootElement extends Components.RemtehRoot, HTMLStencilElement {
    }
    var HTMLRemtehRootElement: {
        prototype: HTMLRemtehRootElement;
        new (): HTMLRemtehRootElement;
    };
    interface HTMLRemtehSelectElement extends Components.RemtehSelect, HTMLStencilElement {
    }
    var HTMLRemtehSelectElement: {
        prototype: HTMLRemtehSelectElement;
        new (): HTMLRemtehSelectElement;
    };
    interface HTMLRemtehTopElement extends Components.RemtehTop, HTMLStencilElement {
    }
    var HTMLRemtehTopElement: {
        prototype: HTMLRemtehTopElement;
        new (): HTMLRemtehTopElement;
    };
    interface HTMLRemtehWhatWeDoElement extends Components.RemtehWhatWeDo, HTMLStencilElement {
    }
    var HTMLRemtehWhatWeDoElement: {
        prototype: HTMLRemtehWhatWeDoElement;
        new (): HTMLRemtehWhatWeDoElement;
    };
    interface HTMLRemtehWhyTrustElement extends Components.RemtehWhyTrust, HTMLStencilElement {
    }
    var HTMLRemtehWhyTrustElement: {
        prototype: HTMLRemtehWhyTrustElement;
        new (): HTMLRemtehWhyTrustElement;
    };
    interface HTMLTabBarElement extends Components.TabBar, HTMLStencilElement {
    }
    var HTMLTabBarElement: {
        prototype: HTMLTabBarElement;
        new (): HTMLTabBarElement;
    };
    interface HTMLTabSliderElement extends Components.TabSlider, HTMLStencilElement {
    }
    var HTMLTabSliderElement: {
        prototype: HTMLTabSliderElement;
        new (): HTMLTabSliderElement;
    };
    interface HTMLElementTagNameMap {
        "nice-anim": HTMLNiceAnimElement;
        "prog-img": HTMLProgImgElement;
        "remteh-advantages": HTMLRemtehAdvantagesElement;
        "remteh-bottom": HTMLRemtehBottomElement;
        "remteh-case": HTMLRemtehCaseElement;
        "remteh-clients": HTMLRemtehClientsElement;
        "remteh-contacts": HTMLRemtehContactsElement;
        "remteh-directions": HTMLRemtehDirectionsElement;
        "remteh-header": HTMLRemtehHeaderElement;
        "remteh-home": HTMLRemtehHomeElement;
        "remteh-main-projects": HTMLRemtehMainProjectsElement;
        "remteh-projects": HTMLRemtehProjectsElement;
        "remteh-root": HTMLRemtehRootElement;
        "remteh-select": HTMLRemtehSelectElement;
        "remteh-top": HTMLRemtehTopElement;
        "remteh-what-we-do": HTMLRemtehWhatWeDoElement;
        "remteh-why-trust": HTMLRemtehWhyTrustElement;
        "tab-bar": HTMLTabBarElement;
        "tab-slider": HTMLTabSliderElement;
    }
}
declare namespace LocalJSX {
    interface NiceAnim {
    }
    interface ProgImg {
        "class"?: string;
        "placeHolder"?: string;
        "src"?: string;
    }
    interface RemtehAdvantages {
    }
    interface RemtehBottom {
    }
    interface RemtehCase {
        "case"?: string;
    }
    interface RemtehClients {
    }
    interface RemtehContacts {
    }
    interface RemtehDirections {
    }
    interface RemtehHeader {
        "mode"?: "Home" | "Projects" | "Case";
    }
    interface RemtehHome {
    }
    interface RemtehMainProjects {
    }
    interface RemtehProjects {
        "match"?: MatchResults;
    }
    interface RemtehRoot {
    }
    interface RemtehSelect {
        "onSelect"?: (value: IFilters) => void;
        "options"?: IFilters[];
        "selectedOption"?: IFilters;
    }
    interface RemtehTop {
        "class"?: string;
    }
    interface RemtehWhatWeDo {
    }
    interface RemtehWhyTrust {
    }
    interface TabBar {
        "onChangeTab"?: (value: IFilters) => void;
        "selectedTab"?: IFilters;
        "tabs"?: IFilters[];
    }
    interface TabSlider {
        "slides"?: ISlideFilter;
        "tabs"?: IFilters[];
    }
    interface IntrinsicElements {
        "nice-anim": NiceAnim;
        "prog-img": ProgImg;
        "remteh-advantages": RemtehAdvantages;
        "remteh-bottom": RemtehBottom;
        "remteh-case": RemtehCase;
        "remteh-clients": RemtehClients;
        "remteh-contacts": RemtehContacts;
        "remteh-directions": RemtehDirections;
        "remteh-header": RemtehHeader;
        "remteh-home": RemtehHome;
        "remteh-main-projects": RemtehMainProjects;
        "remteh-projects": RemtehProjects;
        "remteh-root": RemtehRoot;
        "remteh-select": RemtehSelect;
        "remteh-top": RemtehTop;
        "remteh-what-we-do": RemtehWhatWeDo;
        "remteh-why-trust": RemtehWhyTrust;
        "tab-bar": TabBar;
        "tab-slider": TabSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nice-anim": LocalJSX.NiceAnim & JSXBase.HTMLAttributes<HTMLNiceAnimElement>;
            "prog-img": LocalJSX.ProgImg & JSXBase.HTMLAttributes<HTMLProgImgElement>;
            "remteh-advantages": LocalJSX.RemtehAdvantages & JSXBase.HTMLAttributes<HTMLRemtehAdvantagesElement>;
            "remteh-bottom": LocalJSX.RemtehBottom & JSXBase.HTMLAttributes<HTMLRemtehBottomElement>;
            "remteh-case": LocalJSX.RemtehCase & JSXBase.HTMLAttributes<HTMLRemtehCaseElement>;
            "remteh-clients": LocalJSX.RemtehClients & JSXBase.HTMLAttributes<HTMLRemtehClientsElement>;
            "remteh-contacts": LocalJSX.RemtehContacts & JSXBase.HTMLAttributes<HTMLRemtehContactsElement>;
            "remteh-directions": LocalJSX.RemtehDirections & JSXBase.HTMLAttributes<HTMLRemtehDirectionsElement>;
            "remteh-header": LocalJSX.RemtehHeader & JSXBase.HTMLAttributes<HTMLRemtehHeaderElement>;
            "remteh-home": LocalJSX.RemtehHome & JSXBase.HTMLAttributes<HTMLRemtehHomeElement>;
            "remteh-main-projects": LocalJSX.RemtehMainProjects & JSXBase.HTMLAttributes<HTMLRemtehMainProjectsElement>;
            "remteh-projects": LocalJSX.RemtehProjects & JSXBase.HTMLAttributes<HTMLRemtehProjectsElement>;
            "remteh-root": LocalJSX.RemtehRoot & JSXBase.HTMLAttributes<HTMLRemtehRootElement>;
            "remteh-select": LocalJSX.RemtehSelect & JSXBase.HTMLAttributes<HTMLRemtehSelectElement>;
            "remteh-top": LocalJSX.RemtehTop & JSXBase.HTMLAttributes<HTMLRemtehTopElement>;
            "remteh-what-we-do": LocalJSX.RemtehWhatWeDo & JSXBase.HTMLAttributes<HTMLRemtehWhatWeDoElement>;
            "remteh-why-trust": LocalJSX.RemtehWhyTrust & JSXBase.HTMLAttributes<HTMLRemtehWhyTrustElement>;
            "tab-bar": LocalJSX.TabBar & JSXBase.HTMLAttributes<HTMLTabBarElement>;
            "tab-slider": LocalJSX.TabSlider & JSXBase.HTMLAttributes<HTMLTabSliderElement>;
        }
    }
}
