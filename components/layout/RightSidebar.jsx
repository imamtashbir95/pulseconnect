import React from "react";

const RightSidebar = () => {
    return (
        <div className="h-screen right-0 top-0 sticky overflow-auto pr-10 pl-6 py-6 w-[300px] xl:w-[350px] flex flex-col gap-12 max-lg:hidden">
            <div className="flex flex-col gap-4">
                <h4 className="text-heading4-bold text-light-1">Following</h4>
                <div className="flex flex-col gap-4">Users mapping</div>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-heading4-bold text-light-1">Suggested People</h4>
                <div className="flex flex-col gap-4">Users mapping</div>
            </div>
        </div>
    )
}

export default RightSidebar;