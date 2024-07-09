interface ListIconsParams{
    text: String
}
export default function ListIcons({text}:ListIconsParams){
    return (
        <li>
            <span className="elementor-icon-list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                    <circle 
                        cx="20.5" 
                        cy="20.5" 
                        r="20.5" 
                        fill="url(#paint0_linear_3721_3798)">
                    </circle>
                    <path 
                        d="M12.5278 20.5L18.2222 26.1945L29.6111 14.8056" 
                        stroke="#6A26DB" 
                        stroke-width="2.73333" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                    </path>
                    <defs>
                        <linearGradient 
                            id="paint0_linear_3721_3798" 
                            x1="21.6389" 
                            y1="39.8611" 
                            x2="20.5" 
                            y2="2.73333" 
                            gradientUnits="userSpaceOnUse">
                            <stop 
                                stop-color="#DADFFF">
                            </stop>
                            <stop 
                                offset="1" 
                                stop-color="#F7F7FE">
                            </stop>
                        </linearGradient>
                    </defs>
                </svg>
            </span>
            <span className="elementor-icon-list-text">{text}</span>
        </li>
    )
}
