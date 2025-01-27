import React from 'react'
import { useParams } from 'react-router-dom'

export default function ViewIdeaPage() {
    const { ideaNick } = useParams() as { ideaNick: string }
    return (
        <div>
            <h1>{ideaNick}</h1>
            <p>desc</p>
            <div>
                <p>text</p>
            </div>
        </div>
    )
}
