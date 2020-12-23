import React from 'react'

function Navbar() {
  return (
  <nav>
    <div class="nav-wrapper black">
      <a href="#" class="brand-logo">Vote</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="">Log Out</a></li>
        <li><a href="">Vote</a></li>
        <li><a href="">Map</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
