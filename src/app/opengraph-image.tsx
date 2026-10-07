import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import { join } from "path"

// link preview image for every page, generated at build time
export const alt = "Harry Scully - fullstack developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
    const photo = await readFile(join(process.cwd(), "public/me.jpg"))
    const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`

    return new ImageResponse(
        (
            <div style={{ display: "flex", width: "100%", height: "100%", background: "white", color: "#262626" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "0 80px" }}>
                    <div style={{ fontSize: 28, letterSpacing: 6, color: "#737373" }}>harryscully.com</div>
                    <div style={{ fontSize: 88, marginTop: 24 }}>Harry Scully</div>
                    <div style={{ fontSize: 36, marginTop: 16, color: "#525252" }}>
                        Fullstack developer, quiz enthusiast, film watcher
                    </div>
                    <div style={{ width: 120, height: 8, marginTop: 48, background: "#16a34a" }} />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoSrc} width={420} height={630} style={{ objectFit: "cover" }} alt="" />
            </div>
        ),
        size
    )
}
