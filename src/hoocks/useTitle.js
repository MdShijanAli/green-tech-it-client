import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - GREEN TECH IT`;
    }, [title])
};

export default useTitle;