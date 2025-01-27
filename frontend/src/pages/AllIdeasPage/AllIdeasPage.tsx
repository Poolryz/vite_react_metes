import React from 'react';
import { trpc } from '../../lib/trpc'
export default function AllIdeasPage() {
    const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery();
    if (isLoading || isFetching) {
        return <span>loading...</span>
    }
    if (isError) {
        return <span>Error:{error.message}</span>
    }

    return (
        <div>
            <h1>All ideas</h1>
            {data.ideas.map((idea, index) => {
                return (
                    <div key={index}>
                        <h2>{idea.name}</h2>
                        <p>{idea.description}</p>
                    </div>)
            })}
        </div>
    )
}