import Head from 'next/head'
import Link from 'next/link'
import main from '../styles/aside.module.css'
import { useRouter } from 'next/router'

export default function Aside() {
    let router = useRouter();
  return (
    <>
        <Head>
            <meta lang='en' />
            <meta charset="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Bootstrap CDN Files || It's not the best way, If I added files to project is better but I just want to reduce files :D */}
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </Head>

        <div className={`row ${main.aside}`}>
            <div className='col-xs-12'>
                <div className='row'>
                    {/* Logo */}
                </div>
                <div className='row'>
                    <h4>Menu</h4>
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
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
