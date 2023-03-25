import { useEffect } from "react"
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

var overscrollOptions = {
  enable: true, 
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll : 150,
}

var options = {
  damping: 0.07,
  plugins:{
    overscroll: {...overscrollOptions}
  }
}

const SmoothScroll  = () =>{
  useEffect(() =>{
    var fixedElem = document.getElementById('navbar');

    Scrollbar.use(OverscrollPlugin)
    var scrollbar = Scrollbar.init(document.body, options)

    scrollbar.addListener(function(status) {
      var offset = status.offset;
     
     fixedElem.style.top = offset.y + 'px';
     fixedElem.style.left = offset.x + 'px';
   });
    return () =>  {
      if(Scrollbar) Scrollbar.destroy(document.body)
    }
  },[])

  return null
}

export default SmoothScroll