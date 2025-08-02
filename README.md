# Figma Make Boilerplate

## How to use this repo

1. Fork this repo
2. Download your Figma Make compressed folder
3. Uncompress that folder's contents inside the `src` folder (ex: `App.tsx`, `components/ui/button.tsx`, etc... should live at `src/App.tsx`, `src/components/...` respectively)
4. Comment out or remove the `src...` lines in the `.gitignore` file at the bottom (see the code comment in that file)
5. You may need to upload images used, or repair code to point to new ones if not in the figma code download.
6. Run `npm install` (be sure you're running Node 22)
7. Run `npm run dev` and navigate to the URL in the terminal (http://localhost:5173)
