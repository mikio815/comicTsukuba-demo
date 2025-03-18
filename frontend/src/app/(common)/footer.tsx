import LinkButton from "@/app/(common)/linkButton"


export default function Footer() {
    return (
        <footer className="bg-[#00C1D4] font-nav text-white text-xs h-[120px] flex items-center justify-between shadow-md pl-40 pr-60 space-y-5">
            <div className="space-y-5">
                <div>
                    <p className="text-[12px] font-bold">
                    コミックつくば！準備会
                    </p>
                    <p> mail: comictsukubastaff@gmail.com</p>
                </div>
                <div>
                    <p>Copyright &copy; 2025 <strong>コミックつくば！準備会</strong> All Rights Reserved.</p>
                </div>
            </div>

            <div className="mt-20 flex pl-28 space-x-10">
                <LinkButton platform="twitter" url="https://x.com/comictsukuba" size={36} color="#FFFFFF"/>
                <LinkButton platform="instagram" url="https://instagram.com" size={36} color="#FFFFFF" />
            </div>
        </footer>
    );
}
