import React from 'react';

const Blob = (props) => {

    const style = {
        position: 'absolute',
        backgroundImage: `url(${props.img_top}), url(${props.img_bot})`,
        backgroundPosition: `${props.top_img_x} ${props.top_img_y}, 0 center`,
        width: '100%',
        height: '832px',
        backgroundRepeat: 'no-repeat',
        top: props.top,
        bottom: props.bottom,
        right: props.right,
        left: props.left,
        zIndex: '-1',
        webkitzFilter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
        filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))'
    }

    return <svg style={style}/>
}

export default Blob;