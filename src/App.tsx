import React from "react"
import { Button } from "@backyard/react";

export default function App() {
	return (
		<div className="min-h-screen bg-background text-foreground p-8">
			<h1 className="text-4x1 font-bold mb-4">Welcome to the Figma Make Boilerplate</h1>
			<p className="text-lg text-muted-foreground">
				Tailwind is working. Vite is Working. Ready to build.
				
				<Button variant="filled" color="interactive" size="medium" fullWidth={false} elevation={false}>Button</Button>
			</p>
		</div>
	)
}