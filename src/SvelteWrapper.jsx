import { useLayoutEffect, useRef } from "react";

 function SvelteWrapper (Component) {
 
  function Wrapped (props) {
    
    const ref = useRef(null);

    useLayoutEffect(() => {
      while(ref.current.firstChild) {
        ref.current.firstChild.remove();
      }
      new Component({
        target: ref.current,
        props
      })
    },[props]);

    return <div ref={ref}></div>
  }
  return Wrapped
}


export default SvelteWrapper;