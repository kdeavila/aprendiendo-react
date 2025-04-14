import { useEffect, useState } from 'react'

export function useCatImage({ fact }: { fact: string | null }) {
    const [imageUrl, setImageUrl] = useState<string>('')
    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

    useEffect(() => {
        if (!fact) return

        const threeFirstWords = fact.split(' ', 3).join('%20')
        const url = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red`

        setImageUrl(url)
    }, [fact])

    return { imageUrl }
}
