import Link from 'next/link'
import main from '../styles/aside.module.css'
import { useRouter } from 'next/router'

export default function AllLinks() {
    let router = useRouter();
    return (
        <>
            <div className={`row ${main.aside}`}>
                <ul>
                    <li className={router.pathname === "/" ? `${main.active}` : ""}>
                        <Link href='/'>
                            <a><i class="fas fa-home"></i> Home</a>
                        </Link>
                    </li>
                    <li className={router.pathname === "/messages" ? `${main.active}` : ""}>
                        <Link href='/messages'>
                            <a><i className="fas fa-comment-dots"></i> Messages</a>
                        </Link>
                    </li>

                    <li className={router.pathname === "/profile" ? `${main.active}` : ""}>
                        <Link href='/profile'>
                            <a><i class="fas fa-user"></i> Profile</a>
                        </Link>
                    </li>
                    <li className={router.pathname === "/saved_posts" ? `${main.active}` : ""}>
                        <Link href='/saved_posts'>
                            <a><i class="fas fa-bookmark"></i> Saved Post</a>
                        </Link>
                    </li>
                    <li className={router.pathname === "/settings" ? `${main.active}` : ""}>
                        <Link href='/settings'>
                            <a><i class="fas fa-cog"></i> Settings</a>
                        </Link>
                    </li>

                    {/* Max width to display is 767px (in top bar section) */}
                    <ul className={`${main.rightSectionLinks}`}>
                        <li className={router.pathname === "/notfications" ? `${main.active}` : ""}>
                            <Link href='/notfications'>
                                <a><i class="fas fa-bell"></i> Notfications</a>
                            </Link>
                        </li>
                        <li className={router.pathname === "/post" ? `${main.active}` : ""}>
                            <Link href='/post'>
                                <a><i class="fas fa-cloud-upload-alt"></i> Post to feed</a>
                            </Link>
                        </li>
                    </ul>
                </ul>
            </div>
        </>
    )
}
