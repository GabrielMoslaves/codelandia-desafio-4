import { useState } from "react";
import heart from '../../images/heart.png'
import heartfilled from '../../images/heartfilled.png'


function LikeButton() {
  const [like, setLike] = useState(false);

  return (
  <div>
    {like ? (<img onClick= {()=>setLike(!like)} src={heartfilled}/>
) : (
<img onClick= {()=>setLike(!like)} src={heart}/>)}
  </div>);
}

export default LikeButton;