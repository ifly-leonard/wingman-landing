"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const components: { title: string; href: string; description: string }[] = [
    
    {
        title: "Pricing",
        href: "/pricing",
        description: "Find out the value add and cost of our apps and services",
    },
    
    {
        title: "Blog",
        href: "/post",
        description: "The most authentic information resource for Pilots and Aviation Professionals",
    },

    {
        title: "Supported airlines",
        href: "/supported-airlines",
        description: "A list of airlines that wingman apps currently support",
    },

    {
        title: "eGCA upload guide",
        href: "/eGCA",
        description: "Our comprehensive guide to help you to navigate eGCA",
    },

    {
        title: "Downloads",
        href: "/downloads",
        description: "Download hand-crafted resources, templates and more",
    },

    {
        title: "Password Reset",
        href: "/password-reset",
        description: "Reset your Wingman account's password",
    },

    {
        title: "Careers",
        href: "/careers",
        description: "Kickstart your career at Wingman",
    },

    {
        title: "Policy",
        href: "/policy",
        description: "Find all the legal policies that govern our operations at Wingman",
    },


]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    href={href || "#"}
                    {...props}
                >
                    <div className={`text-sm font-bold leading-none text-blue-500`}>
                    {/* ${title === "Blogs" ? "text-blue-500" : ""}`} */}
                        {title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-slate-300/10">            
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between py-4">
                <Link href="/" className="flex items-center">
                    <Image src="/images/wm-logo-text-only.svg" width="150" height="100" alt="Wingman" />
                </Link>
                
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-2 grid-cols-2 p-4 lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    
                                    <div className="w-2/3">
                                        <ul className="flex flex-col gap-2">
                                            <ListItem href="/products-for/airline-pilots" title="Airline Pilots"></ListItem>                                            
                                            <ListItem href="/products-for/cabin-crew" title="Cabin Crew"></ListItem>                                            
                                            <ListItem href="/products-for/flight-training-organisations" title="FTOs"></ListItem>
                                            <ListItem href="/products-for/non-scheduled-operators" title="NSOPs"></ListItem>
                                            <ListItem href="/products-for/ground-schools" title="Ground Schools"></ListItem>
                                            <ListItem href="/products-for/airlines" title="Airlines"></ListItem>
                                        </ul>
                                    </div>
                                    
                                    <div className="w-3/3">
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-400 to-blue-500 text-white p-6 no-underline outline-none focus:shadow-md transform hover:scale-105 duration-300 ease-in-out"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-bold">
                                                    View all products
                                                </div>
                                                <p className="text-sm leading-tight">
                                                    Wingman is a suite of apps that help aviation professionals save time and money.
                                                </p>
                                            </a>                                 
                                    </div>
                                </div>                            
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>                            
                                <div className={navigationMenuTriggerStyle()}>
                                    <Link href="/support" passHref>
                                            Support                                
                                    </Link>
                                </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Button className="bg-primary hover:bg-primary/90">
                    Login
                </Button>
            </div>
        </header>
    )
}