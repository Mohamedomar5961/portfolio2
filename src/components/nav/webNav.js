import React, { useEffect, useState } from "react";

const WebNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const onToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="website-nav">
      {toggleMenu ? (
        <div className="navSide" onClick={onToggle}>
          <ul>
            <li className="firstLi">
              <svg
                onClick={onToggle}
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Menuclose">
                  <path
                    id="Vector"
                    d="M18 6L6 18"
                    stroke="#737373"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M6 6L18 18"
                    stroke="#737373"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Projects</li>
            <li>Skills</li>
          </ul>
        </div>
      ) : (
        <div className="navBox">
          <svg
            className="arrow 1"
            onClick={onToggle}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow 1">
              <path
                id="Arrow_Forward"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 16.009C32 15.742 31.89 15.487 31.707 15.295L21.808 5.296C21.417 4.901 20.784 4.902 20.394 5.296C20.003 5.69 20.003 6.33 20.394 6.724L28.587 14.999H1C0.448 14.999 0 15.451 0 16.009C0 16.567 0.448 17.019 1 17.019H28.586L20.394 25.294C20.003 25.688 20.004 26.328 20.394 26.722C20.785 27.116 21.418 27.116 21.808 26.722L31.707 16.723C31.894 16.534 31.997 16.274 32 16.009Z"
                fill="#121313"
              />
            </g>
          </svg>
          <svg
            width="70"
            height="70"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icons8-linkedin 1">
              <g id="surface27183757">
                <path
                  id="Vector"
                  d="M30.3047 17.6523C23.1367 17.6523 17.3047 23.4844 17.3047 30.6523V69.6523C17.3047 76.8242 23.1367 82.6523 30.3047 82.6523H69.3047C76.4766 82.6523 82.3047 76.8242 82.3047 69.6523V30.6523C82.3047 23.4844 76.4766 17.6523 69.3047 17.6523H30.3047ZM30.3047 19.6523H69.3047C75.3711 19.6523 80.3047 24.5898 80.3047 30.6523V69.6523C80.3047 75.7187 75.3711 80.6523 69.3047 80.6523H30.3047C24.2422 80.6523 19.3047 75.7187 19.3047 69.6523V30.6523C19.3047 24.5898 24.2422 19.6523 30.3047 19.6523ZM33.1445 22.6523C27.168 22.6523 22.3047 27.5156 22.3047 33.4883V66.8164C22.3047 72.793 27.168 77.6523 33.1445 77.6523H66.4727C72.4453 77.6523 77.3047 72.793 77.3047 66.8164V48.1523C77.3047 47.8789 77.082 47.6523 76.8047 47.6523C76.5312 47.6523 76.3047 47.8789 76.3047 48.1523V66.8164C76.3047 72.2422 71.8945 76.6523 66.4727 76.6523H33.1445C27.7188 76.6523 23.3047 72.2422 23.3047 66.8164V33.4883C23.3047 28.0664 27.7188 23.6523 33.1445 23.6523H66.8047C67.082 23.6523 67.3047 23.4297 67.3047 23.1523C67.3047 22.875 67.082 22.6523 66.8047 22.6523H33.1445ZM38.8242 35.6953C36.7383 35.6953 35.2227 37.1563 35.2227 39.1758C35.2227 41.1914 36.707 42.6523 38.7891 42.6523C40.875 42.6523 42.3906 41.1914 42.3906 39.1641C42.3398 37.1211 40.8711 35.6953 38.8242 35.6953ZM38.8242 36.6953C40.3437 36.6953 41.3555 37.6758 41.3906 39.1758C41.3906 40.6367 40.3203 41.6562 38.7539 41.6562C37.2656 41.6562 36.2227 40.6367 36.2227 39.1758C36.2227 37.7148 37.293 36.6953 38.8242 36.6953ZM76.8047 37.6523C76.5312 37.6523 76.3047 37.8789 76.3047 38.1523V40.1523C76.3047 40.4297 76.5312 40.6523 76.8047 40.6523C77.082 40.6523 77.3047 40.4297 77.3047 40.1523V38.1523C77.3047 37.8789 77.082 37.6523 76.8047 37.6523ZM76.8047 41.6523C76.5312 41.6523 76.3047 41.8789 76.3047 42.1523V46.1523C76.3047 46.4297 76.5312 46.6523 76.8047 46.6523C77.082 46.6523 77.3047 46.4297 77.3047 46.1523V42.1523C77.3047 41.8789 77.082 41.6523 76.8047 41.6523ZM57.5781 44.5312C55.375 44.543 53.5937 45.1992 52.3047 46.582V45.1523C52.3047 44.875 52.082 44.6523 51.8047 44.6523H45.7305C45.5937 44.6523 45.4609 44.707 45.3672 44.8047C45.2734 44.9062 45.2227 45.0391 45.2305 45.1758C45.3125 46.9258 45.2305 63.9766 45.2305 64.1484C45.2305 64.2852 45.2812 64.4102 45.375 64.5039C45.4688 64.6016 45.5977 64.6523 45.7305 64.6523H51.8047C52.082 64.6523 52.3047 64.4297 52.3047 64.1523V53.5391C52.3047 52.9258 52.3672 52.4727 52.4805 52.1836C52.7266 51.5859 53.4805 50.1875 55.2656 50.1875C57.9336 50.1875 58.2227 52.8945 58.2227 54.0625L58.3047 64.1562C58.3086 64.4297 58.5312 64.6523 58.8047 64.6523H64.8047C65.082 64.6523 65.3047 64.4297 65.3047 64.1523V53.9727C65.3047 50.6445 64.4844 48.1367 62.8633 46.5156C61.543 45.1992 59.7656 44.5312 57.5742 44.5312H57.5781ZM35.8047 44.6523C35.5312 44.6523 35.3047 44.8789 35.3047 45.1523V64.1523C35.3047 64.4297 35.5312 64.6523 35.8047 64.6523H41.8047C42.082 64.6523 42.3047 64.4297 42.3047 64.1523V45.1523C42.3047 44.8789 42.082 44.6523 41.8047 44.6523H35.8047ZM57.5586 45.5352H57.5781C59.4922 45.5352 61.0352 46.1055 62.1602 47.2266C63.582 48.6484 64.3047 50.918 64.3047 53.9766V63.6523H59.3008L59.2227 54.0625C59.2227 51.0586 57.707 49.1914 55.2695 49.1914C53.6094 49.1914 52.2187 50.168 51.5586 51.8086C51.3867 52.2187 51.3086 52.7852 51.3086 53.5391V63.6523H46.2344C46.2461 60.957 46.2969 48.6797 46.2422 45.6523H51.3086V47.957C51.25 48.0977 51.2734 48.2617 51.3516 48.3984C51.4375 48.5547 51.625 48.6523 51.8086 48.6523C52.0156 48.6523 52.1914 48.4883 52.2695 48.2891C52.9961 47.0898 54.3438 45.5352 57.5625 45.5352H57.5586ZM36.3047 45.6523H41.3047V63.6523H36.3047V45.6523Z"
                  fill="#4B4B4B"
                />
              </g>
            </g>
          </svg>

          <svg
            width="70"
            height="70"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icons8-github-squared 1">
              <path
                id="Vector"
                d="M29 17C22.383 17 17 22.383 17 29V71C17 77.617 22.383 83 29 83H71C77.617 83 83 77.617 83 71V29C83 22.383 77.617 17 71 17H29ZM29 19H71C76.514 19 81 23.486 81 29V71C81 76.514 76.514 81 71 81H29C23.486 81 19 76.514 19 71V29C19 23.486 23.486 19 29 19ZM34.5 23C28.159 23 23 28.159 23 34.5V65.5C23 71.841 28.159 77 34.5 77H41.9766H58.9766H65.5C71.841 77 77 71.841 77 65.5V50.5C77 50.224 76.776 50 76.5 50C76.224 50 76 50.224 76 50.5V65.5C76 71.29 71.29 76 65.5 76H59.4766V67.6543C59.4766 65.4413 58.4394 63.368 56.7324 62H57.4258C64.5988 62 70.4336 56.1861 70.4336 49.0391C70.4336 45.8021 69.2338 42.7106 67.0488 40.3066C67.3788 38.2426 67.3842 35.1438 66.4492 32.3418C66.3802 32.1378 66.1896 32 65.9746 32C61.9236 32 58.5032 34.689 57.0762 36H44.668C41.168 32.696 38.0126 32 35.9766 32C35.7616 32 35.571 32.1378 35.502 32.3418C34.734 34.6428 34.3965 37.3966 34.6055 39.5996C32.0065 42.0536 30.5215 45.479 30.5215 49.041C30.5215 56.187 36.3553 62 43.5273 62H44.1953C42.8743 63.032 41.9284 64.4511 41.5664 65.9961C39.5694 65.9641 37.2799 65.6685 36.2109 64.0645C33.7859 60.4245 32.5626 60.1523 30.9746 60.1523C30.3116 60.1523 29.8125 60.4423 29.6035 60.9473C29.3095 61.6553 29.6525 62.5978 30.5215 63.4668C31.6935 64.6398 31.6947 64.6384 32.8887 67.0254C33.6107 68.4694 35.6796 70.8631 41.4766 70.9941V76H34.5C28.71 76 24 71.29 24 65.5V34.5C24 28.71 28.71 24 34.5 24H65.5C65.776 24 66 23.776 66 23.5C66 23.224 65.776 23 65.5 23H34.5ZM36.3379 33.0078C38.2059 33.0918 40.9572 33.8503 44.0352 36.7773L44.127 36.8652C44.22 36.9522 44.3417 37 44.4688 37H57.2734C57.4004 37 57.534 36.9425 57.627 36.8555C58.819 35.7325 61.9313 33.1698 65.6133 33.0078C66.4123 35.6528 66.3545 38.5249 66.0215 40.3789C65.9935 40.5359 66.0414 40.6955 66.1504 40.8105C68.2664 43.0525 69.4336 45.9751 69.4336 49.0391C69.4336 55.6341 64.0468 61 57.4258 61H54.9766C54.7416 61 54.5383 61.1636 54.4883 61.3926C54.4373 61.6216 54.5536 61.8551 54.7676 61.9531C57.0196 62.9861 58.4766 65.2233 58.4766 67.6543V76H42.4766V70.5C42.4766 70.224 42.2526 70 41.9766 70C37.7956 70 34.8852 68.7841 33.7832 66.5781C32.5402 64.0931 32.5155 64.0468 31.2285 62.7598C30.5575 62.0878 30.4413 61.5361 30.5273 61.3301C30.5903 61.1751 30.8346 61.1523 30.9746 61.1523C32.0976 61.1523 33.0679 61.1521 35.3789 64.6191C36.7859 66.7281 39.6436 67 41.9766 67C42.2216 67 42.4297 66.8221 42.4688 66.5801C42.7867 64.6311 44.2096 62.8591 46.1836 61.9551C46.3976 61.8571 46.5158 61.6235 46.4648 61.3945C46.4148 61.1645 46.2116 61 45.9766 61H43.5293C36.9093 61 31.5215 55.6341 31.5215 49.0391C31.5215 45.6741 32.9588 42.4391 35.4648 40.1641C35.5838 40.0551 35.646 39.8963 35.627 39.7363C35.398 37.7693 35.6759 35.1698 36.3379 33.0078ZM76.5 34C76.224 34 76 34.224 76 34.5V38C76 38.276 76.224 38.5 76.5 38.5C76.776 38.5 77 38.276 77 38V34.5C77 34.224 76.776 34 76.5 34ZM76.5 41C76.224 41 76 41.224 76 41.5V48C76 48.276 76.224 48.5 76.5 48.5C76.776 48.5 77 48.276 77 48V41.5C77 41.224 76.776 41 76.5 41Z"
                fill="#D4D4D8"
              />
            </g>
          </svg>
          <svg
            width="50"
            height="50"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="16695937561643307054 1">
              <g id="project">
                <path
                  id="Vector"
                  d="M62 7C61.9984 5.67441 61.4711 4.40356 60.5338 3.46622C59.5964 2.52888 58.3256 2.00159 57 2H7C5.76005 1.99876 4.56387 2.45828 3.64367 3.28938C2.72347 4.12047 2.1449 5.26383 2.02029 6.49751C1.89568 7.73118 2.2339 8.96715 2.96931 9.96548C3.70472 10.9638 4.78485 11.6533 6 11.9V52C6 52.2652 6.10536 52.5196 6.29289 52.7071C6.48043 52.8946 6.73478 53 7 53H58C58.2652 53 58.5196 52.8946 58.7071 52.7071C58.8946 52.5196 59 52.2652 59 52V11.576C59.8906 11.1873 60.6487 10.5475 61.1815 9.73479C61.7143 8.9221 61.9987 7.97177 62 7V7ZM57 51H8V12H57V51ZM57 10H7C6.38174 9.99744 5.77937 9.80392 5.2753 9.44591C4.77123 9.08791 4.39008 8.58291 4.184 8H57V6H4.184C4.39008 5.41709 4.77123 4.91209 5.2753 4.55409C5.77937 4.19609 6.38174 4.00257 7 4H57C57.7956 4 58.5587 4.31607 59.1213 4.87868C59.6839 5.44129 60 6.20435 60 7C60 7.79565 59.6839 8.55871 59.1213 9.12132C58.5587 9.68393 57.7956 10 57 10V10Z"
                  fill="black"
                />
                <path
                  id="Vector_2"
                  d="M55.443 57.1L49.443 54.1C49.431 54.094 49.417 54.1 49.404 54.089C49.3618 54.0746 49.3187 54.0629 49.275 54.054C49.1911 54.0251 49.1036 54.0076 49.015 54.002C49.008 54.002 49.003 54.002 48.996 54.002H12C11.2044 54.002 10.4413 54.3181 9.87868 54.8807C9.31607 55.4433 9 56.2063 9 57.002V59.002C9 59.7976 9.31607 60.5607 9.87868 61.1233C10.4413 61.6859 11.2044 62.002 12 62.002H49C49.1471 62.001 49.292 61.9668 49.424 61.902C49.4297 61.9024 49.4353 61.9024 49.441 61.902L55.441 58.902C55.6071 58.819 55.7469 58.6913 55.8445 58.5333C55.9422 58.3753 55.9939 58.1932 55.9939 58.0075C55.9939 57.8218 55.9422 57.6397 55.8445 57.4817C55.7469 57.3237 55.6071 57.196 55.441 57.113L55.443 57.1ZM48 57H16V56H48V57ZM11 59V57C11 56.7348 11.1054 56.4804 11.2929 56.2929C11.4804 56.1054 11.7348 56 12 56H14V60H12C11.7348 60 11.4804 59.8946 11.2929 59.7071C11.1054 59.5196 11 59.2652 11 59ZM16 59H48V60H16V59ZM50 59.378V56.615L52.761 58L50 59.378Z"
                  fill="black"
                />
                <path
                  id="Vector_3"
                  d="M10 21H32C32.2652 21 32.5196 20.8946 32.7071 20.7071C32.8946 20.5196 33 20.2652 33 20V14C33 13.7348 32.8946 13.4804 32.7071 13.2929C32.5196 13.1054 32.2652 13 32 13H10C9.73478 13 9.48043 13.1054 9.29289 13.2929C9.10536 13.4804 9 13.7348 9 14V20C9 20.2652 9.10536 20.5196 9.29289 20.7071C9.48043 20.8946 9.73478 21 10 21ZM11 15H31V19H11V15Z"
                  fill="black"
                />
                <path
                  id="Vector_4"
                  d="M32 48C34.5715 48.0014 37.0616 47.098 39.034 45.448L41.293 47.707C41.4805 47.8945 41.7348 47.9999 42 48H56V46H42.414L40.448 44.034C42.0057 42.1725 42.9008 39.8462 42.9926 37.4207C43.0844 34.9951 42.3676 32.6079 40.955 30.634L44.343 28H49V26H44C43.7777 25.9998 43.5616 26.0737 43.386 26.21L39.652 29.11C38.1645 27.6612 36.2967 26.6637 34.2653 26.2334C32.2339 25.8031 30.1221 25.9575 28.1749 26.6788C26.2277 27.4 24.5249 28.6586 23.264 30.3084C22.0031 31.9582 21.2357 33.9317 21.051 36H9V38H21.051C21.3026 40.7311 22.5645 43.27 24.5896 45.1196C26.6148 46.9692 29.2573 47.9964 32 48V48ZM32 46C29.7875 45.9968 27.6534 45.1796 26.0046 43.7043C24.3557 42.229 23.3072 40.1986 23.059 38H31.586L37.611 44.025C36.0206 45.3039 34.0408 46.0008 32 46V46ZM32 28C34.2418 28.0009 36.4017 28.8427 38.053 30.359L34.386 33.21L35.614 34.79L39.378 31.862C40.4913 33.4502 41.0587 35.3569 40.9951 37.2954C40.9314 39.2339 40.2401 41.0993 39.025 42.611L32.707 36.293C32.5195 36.1054 32.2652 36.0001 32 36H23.059C23.3072 33.8014 24.3557 31.771 26.0046 30.2957C27.6534 28.8203 29.7875 28.0032 32 28V28Z"
                  fill="black"
                />
                <path id="Vector_5" d="M18 33H9V35H18V33Z" fill="black" />
                <path id="Vector_6" d="M18 30H9V32H18V30Z" fill="black" />
                <path id="Vector_7" d="M18 27H9V29H18V27Z" fill="black" />
                <path id="Vector_8" d="M56 43H47V45H56V43Z" fill="black" />
                <path id="Vector_9" d="M56 40H47V42H56V40Z" fill="black" />
                <path id="Vector_10" d="M56 37H47V39H56V37Z" fill="black" />
                <path id="Vector_11" d="M49 23H41V25H49V23Z" fill="black" />
                <path id="Vector_12" d="M49 20H41V22H49V20Z" fill="black" />
                <path id="Vector_13" d="M49 17H41V19H49V17Z" fill="black" />
                <path id="Vector_14" d="M11 48H9V50H11V48Z" fill="black" />
                <path id="Vector_15" d="M14 48H12V50H14V48Z" fill="black" />
                <path id="Vector_16" d="M11 45H9V47H11V45Z" fill="black" />
              </g>
            </g>
          </svg>
          <svg
            width="55"
            height="55"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="8273568811580217333 1">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M87.5734 0H12.4266C11.6159 0 10.9589 0.657143 10.9589 1.46771V84.0509C10.9589 84.4364 11.1161 84.816 11.3887 85.0887L25.8701 99.5701C26.1429 99.8429 26.5223 100 26.908 100H87.5734C88.3842 100 89.0411 99.3429 89.0411 98.5323V78.5714C89.0411 77.7609 88.3842 77.1037 87.5734 77.1037C86.7626 77.1037 86.1057 77.7609 86.1057 78.5714V97.0646H28.3758V84.0509C28.3758 83.2403 27.7188 82.5832 26.908 82.5832H13.8943V2.93542H86.1057V18.7867C86.1057 19.5973 86.7626 20.2544 87.5734 20.2544C88.3842 20.2544 89.0411 19.5973 89.0411 18.7867V1.46771C89.0411 0.657143 88.3842 0 87.5734 0ZM25.4403 94.989L15.9699 85.5186H25.4403V94.989Z"
                    fill="black"
                  />
                  <path
                    id="Vector_2"
                    d="M87.5734 24.364C86.7627 24.364 86.1057 25.0211 86.1057 25.8317V68.4931C86.1057 69.3037 86.7627 69.9609 87.5734 69.9609C88.3842 69.9609 89.0411 69.3037 89.0411 68.4931V25.8317C89.0411 25.0211 88.3842 24.364 87.5734 24.364Z"
                    fill="black"
                  />
                  <path
                    id="Vector_3"
                    d="M54.6967 36.0078H45.3034C42.7675 36.0078 40.7045 38.0708 40.7045 40.6066V51.5655C40.7045 52.3761 41.3615 53.0333 42.1722 53.0333H57.8278C58.6386 53.0333 59.2955 52.3761 59.2955 51.5655V40.6066C59.2955 38.0708 57.2325 36.0078 54.6967 36.0078ZM56.3601 50.0978H43.6399V40.6066C43.6399 39.6894 44.3861 38.9432 45.3034 38.9432H54.6967C55.6139 38.9432 56.3601 39.6894 56.3601 40.6066V50.0978Z"
                    fill="black"
                  />
                  <path
                    id="Vector_4"
                    d="M50 35.8121C54.2623 35.8121 57.73 32.3444 57.73 28.0822C57.73 23.82 54.2623 20.3523 50 20.3523C42.902 20.3523 39.8204 25.1757 39.1828 27.7262C38.9548 28.6388 39.6677 29.5499 40.6067 29.5499H42.4116C43.0994 33.1125 46.2396 35.8121 50 35.8121ZM50 32.8767C47.8681 32.8767 46.0576 31.4777 45.4362 29.5499H54.564C53.9425 31.4777 52.1319 32.8767 50 32.8767ZM50 23.2877C52.1321 23.2877 53.9435 24.6863 54.5648 26.6145H42.9265C43.9474 25.13 46.0169 23.2877 50 23.2877Z"
                    fill="black"
                  />
                  <path
                    id="Vector_5"
                    d="M67.2211 73.5812H32.7789C31.9681 73.5812 31.3112 74.2384 31.3112 75.0489C31.3112 75.8595 31.9681 76.5166 32.7789 76.5166H67.2211C68.0319 76.5166 68.6888 75.8595 68.6888 75.0489C68.6888 74.2384 68.0319 73.5812 67.2211 73.5812Z"
                    fill="black"
                  />
                  <path
                    id="Vector_6"
                    d="M32.7789 84.3444H42.1722C42.983 84.3444 43.6399 83.6873 43.6399 82.8767C43.6399 82.0661 42.983 81.409 42.1722 81.409H32.7789C31.9681 81.409 31.3112 82.0661 31.3112 82.8767C31.3112 83.6873 31.9681 84.3444 32.7789 84.3444Z"
                    fill="black"
                  />
                  <path
                    id="Vector_7"
                    d="M59.2955 82.8767C59.2955 82.0661 58.6386 81.409 57.8278 81.409H48.4344C47.6237 81.409 46.9667 82.0661 46.9667 82.8767C46.9667 83.6873 47.6237 84.3444 48.4344 84.3444H57.8278C58.6386 84.3444 59.2955 83.6873 59.2955 82.8767Z"
                    fill="black"
                  />
                  <path
                    id="Vector_8"
                    d="M32.7789 92.1722H54.6967C55.5074 92.1722 56.1644 91.5151 56.1644 90.7045C56.1644 89.8939 55.5074 89.2368 54.6967 89.2368H32.7789C31.9681 89.2368 31.3112 89.8939 31.3112 90.7045C31.3112 91.5151 31.9681 92.1722 32.7789 92.1722Z"
                    fill="black"
                  />
                  <path
                    id="Vector_9"
                    d="M67.2212 89.2368H60.9589C60.1482 89.2368 59.4912 89.8939 59.4912 90.7045C59.4912 91.5151 60.1482 92.1722 60.9589 92.1722H67.2212C68.0319 92.1722 68.6889 91.5151 68.6889 90.7045C68.6889 89.8939 68.0319 89.2368 67.2212 89.2368Z"
                    fill="black"
                  />
                  <path
                    id="Vector_10"
                    d="M67.2211 81.409H64.09C63.2793 81.409 62.6223 82.0661 62.6223 82.8767C62.6223 83.6873 63.2793 84.3444 64.09 84.3444H67.2211C68.0319 84.3444 68.6889 83.6873 68.6889 82.8767C68.6889 82.0661 68.0319 81.409 67.2211 81.409Z"
                    fill="black"
                  />
                  <path
                    id="Vector_11"
                    d="M79.4937 40.5088H81.3111C82.1219 40.5088 82.7789 39.8517 82.7789 39.0411C82.7789 38.2305 82.1219 37.5734 81.3111 37.5734H79.6466C79.6466 37.5407 79.6477 37.5082 79.6477 37.4756C79.6477 21.6198 67.1364 8.63191 51.4677 7.8644V6.1644C51.4677 5.35383 50.8108 4.69669 50 4.69669C49.1892 4.69669 48.5323 5.35383 48.5323 6.1644V7.8644C32.8636 8.63211 20.3522 21.62 20.3522 37.4756C20.3522 37.5082 20.3534 37.5407 20.3534 37.5734H18.6888C17.8781 37.5734 17.2211 38.2305 17.2211 39.0411C17.2211 39.8517 17.8781 40.5088 18.6888 40.5088H20.5063C21.9812 54.9577 33.8753 66.3687 48.5323 67.0867V68.7867C48.5323 69.5973 49.1892 70.2544 50 70.2544C50.8108 70.2544 51.4677 69.5973 51.4677 68.7867V67.0867C66.1245 66.3687 78.0188 54.9577 79.4937 40.5088ZM51.4677 64.147V64.09C51.4677 63.2795 50.8108 62.6223 50 62.6223C49.1892 62.6223 48.5323 63.2795 48.5323 64.09V64.147C35.4939 63.4374 24.9155 53.3347 23.4605 40.5051C24.236 40.4658 24.8532 39.8264 24.8532 39.0411C24.8532 38.2305 24.1963 37.5734 23.3855 37.5734H23.2888C23.2888 37.5407 23.2877 37.5082 23.2877 37.4756C23.2877 23.2388 34.483 11.5687 48.5323 10.8041V10.8611C48.5323 11.6716 49.1892 12.3288 50 12.3288C50.8108 12.3288 51.4677 11.6716 51.4677 10.8611V10.8041C65.517 11.5687 76.7123 23.239 76.7123 37.4756C76.7123 37.5082 76.7111 37.5407 76.7111 37.5734H76.6145C75.8037 37.5734 75.1468 38.2305 75.1468 39.0411C75.1468 39.8264 75.764 40.4658 76.5395 40.5051C75.0845 53.3347 64.5061 63.4374 51.4677 64.147Z"
                    fill="black"
                  />
                  <path
                    id="Vector_12"
                    d="M50 14.09C37.1051 14.09 26.6145 24.5806 26.6145 37.4755C26.6145 50.3705 37.1051 60.8611 50 60.8611C62.8949 60.8611 73.3855 50.3705 73.3855 37.4755C73.3855 24.5806 62.8949 14.09 50 14.09ZM50 57.9256C38.7239 57.9256 29.5499 48.7519 29.5499 37.4755C29.5499 26.1992 38.7239 17.0254 50 17.0254C61.2761 17.0254 70.4501 26.1992 70.4501 37.4755C70.4501 48.7519 61.2761 57.9256 50 57.9256Z"
                    fill="black"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </nav>
  );
};

export default WebNav;