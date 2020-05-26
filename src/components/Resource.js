import React from 'react'

const Resource = ({resource, onSelect }) => {
    // const {resource} = props;
    const handleClick = () => {
        onSelect(resource.id)
    }

    return (
        <div className={'box'} onClick={handleClick}>
            <h2>{resource.title}</h2>
            <p>{resource.resourceAuthor}</p>
            <p>Published on: {resource.datePublished}</p>
            { resource.videoLength ? (<p>Length: {resource.videoLength} minutes</p>) : null }
            {/* conditional ? true code : false code */}
            <p>Comments: {resource.comments.length}</p>
        </div>
    )
}

export default Resource;