import React from 'react';

interface ContainerProps {
    children: React.ReactNode
    fullWidth?: boolean

}

const Container = (props: ContainerProps) => {
    return <div className={props.fullWidth ? 'w-full' : "w-full lg:w-[80vw] m-auto "}>
        {props.children}
    </div>
}

export default Container; 