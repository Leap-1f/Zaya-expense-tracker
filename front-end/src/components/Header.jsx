export const Header = () => {
    return(
        <div className="flex justify-between">
            <div className="flex gap-[24px]">
                <img src="Vector.png" alt="" />
                <button>Dashboard</button>
                <button>Records</button>
            </div>
            <div className="flex gap-[24px]">
                <button>Record</button>
                <button>
                    <img src="Placeholder" alt="" />
                </button>
            </div>
        </div>
    )
}