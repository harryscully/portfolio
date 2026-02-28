export default function HobbiesLayout({children}:{children: React.ReactNode}) {
    return (
        <div className="flex flex-col gap-8">
            <h1>Hobbies</h1>
            {children}
        </div>
    )
}