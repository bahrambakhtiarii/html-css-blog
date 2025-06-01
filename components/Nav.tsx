"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

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


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
