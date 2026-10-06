"use client";

import { ArrowRight, Building2, FileText, Home, Mail } from "lucide-react";
import { CommandGroup, CommandItem } from "@/components/ui/command";

const navigationItems = [
  {
    label: "Home",
    description: "Get back to home page",
    href: "/",
    icon: Home,
  },
  {
    label: "Companies",
    description: "Browse IT companies across Nepal",
    href: "/companies",
    icon: Building2,
  },
  {
    label: "About",
    description: "Learn more about IT Companies Nepal",
    href: "/about",
    icon: FileText,
  },
  {
    label: "Contact",
    description: "Get in touch with us",
    href: "/contact",
    icon: Mail,
  },
];

interface SearchNavigationProps {
  onNavigate: (href: string) => void;
}

export function SearchNavigation({ onNavigate }: SearchNavigationProps) {
  return (
    <>
      <CommandGroup heading="Quick navigation" className="px-1 py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <CommandItem
              key={item.href}
              value={`${item.label} ${item.description}`}
              onSelect={() => onNavigate(item.href)}
              className="group cursor-pointer rounded-xl px-3 py-3"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
                <Icon className="size-4 text-muted-foreground" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{item.label}</p>

                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-data-[selected=true]:opacity-100" />
            </CommandItem>
          );
        })}
      </CommandGroup>

      <CommandGroup heading="Discover" className="px-1 py-2">
        <CommandItem
          value="browse all companies"
          onSelect={() => onNavigate("/companies")}
          className="cursor-pointer rounded-xl px-3 py-3"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
            <Building2 className="size-4" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium">Browse all companies</p>

            <p className="mt-0.5 text-xs text-muted-foreground">
              Explore the complete IT company directory
            </p>
          </div>
        </CommandItem>
      </CommandGroup>
    </>
  );
}
