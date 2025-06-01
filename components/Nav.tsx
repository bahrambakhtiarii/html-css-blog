"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Nav() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>HTML</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                    <li>
                        <NavigationMenuLink asChild>
                            <Link href="/posts?category=html">
                                <div className="font-medium">All</div>
                                <div className="text-muted-foreground">
                                    Articles and Projects.
                                </div>
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/posts?type=article&category=html">
                                <div className="font-medium">Articles</div>
                                <div className="text-muted-foreground">
                                    Show all article about html.
                                </div>
                            </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                            <Link href="/posts?type=project&category=html">
                                <div className="font-medium">Projects</div>
                                <div className="text-muted-foreground">
                                    All of the projects about html.
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>CSS</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                    <li>
                        <NavigationMenuLink asChild>
                            <Link href="/posts?category=css">
                                <div className="font-medium">All</div>
                                <div className="text-muted-foreground">
                                Articles and Projects.
                                </div>
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/posts?type=article&category=css">
                                <div className="font-medium">Articles</div>
                                <div className="text-muted-foreground">
                                Show all article about css.
                                </div>
                            </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                            <Link href="/posts?type=project&category=html">
                                <div className="font-medium">Projects</div>
                                <div className="text-muted-foreground">
                                All of the projects about css.
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                    <li>
                        <NavigationMenuLink asChild>
                            <Link href="/posts?type=project">
                                <div className="font-medium">All</div>
                                <div className="text-muted-foreground">
                                All of the projects.
                                </div>
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/posts?type=project&category=html">
                                <div className="font-medium">HTML</div>
                                <div className="text-muted-foreground">
                                Html Projcts.
                                </div>
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/posts?type=project&category=css">
                                <div className="font-medium">CSS</div>
                                <div className="text-muted-foreground">
                                Css Projcts.
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}



