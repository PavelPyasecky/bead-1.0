import React from "react";


function withSuspense(Component) {
    function ComponentWithSuspense(props) {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }

    return ComponentWithSuspense;
}

export default withSuspense;
