import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "./Hero";


describe("Hero Component", () =>{
    test("render hero image", () =>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png');
    });

    test("render hero image", () => {
        render(<Hero/>);
        const signupButton = screen.getByRole("button", { name:/Signup Now/i });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });    

});