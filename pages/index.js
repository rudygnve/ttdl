import { Inter } from "next/font/google";
import { BiPaste } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { RxCross1, RxDownload, RxReset } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { faqs, banners } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FileSaver from "file-saver";
import axios from "axios";
import { getRandomBanner } from "@/lib/functions";
import AdHeader from "@/components/AdHeader";
import Link from "next/link";
import { Image } from "next/image"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pasted, setPasted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [randomBanner, setRandomBanner] = useState({
    imgUrl: "//a.impactradius-go.com/display-ad/5618-1130495",
    affLink: "https://namecheap.pxf.io/c/3239329/1130495/5618",
  });

  const regex = /https:\/\/(www|vm|vt).tiktok.com\/.+/;

  useEffect(() => {
    if (inputText) {
      setPasted(true);
    } else {
      setPasted(false);
    }
  }, [inputText]);

  const handlePaste = () => {
    if (inputText) {
      setInputText("");
      setPasted(true);
      setMsg("");
    } else {
      navigator.clipboard.readText().then((clipText) => setInputText(clipText));
      setPasted(false);
    }
  };

  const handleFetch = async (e) => {
    e.preventDefault();
    if (!inputText) {
      setMsg("Please provide a link!");
      setTimeout(() => {
        setMsg("");
      }, 6000);
    } else {
      setMsg("");
      if (!regex.test(inputText)) {
        setMsg("Please provide a valid TikTok link!");
        setTimeout(() => {
          setMsg("");
        }, 6000);
      } else {
        setMsg("");
        setIsFetching(true);
        setLoading(true);
        try {
          const options = {
            method: "GET",
            url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
            params: {
              url: inputText,
              hd: "1",
            },
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
              "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
            },
          };
          try {
            const response = await axios.request(options);
            setData(response.data?.data);
            setLoading(false);
          } catch (error) {
            setIsFetching(false);
            setMsg("An error occurred - Please try again or contact us!");
          }
        } catch (error) {
          setIsFetching(false);
          setLoading(false);
          setMsg("An error occurred - Please try again or contact us!");
          setTimeout(() => {
            setMsg("");
          }, 6000);
        }
      }
    }
  };

  const handleDownloadMP4 = (url) => {
    setIsDownloading(true);
    try {
      FileSaver.saveAs(url, "ttdl" + new Date().getTime() + ".mp4");
    } catch (error) {
      setIsDownloading(false);
      alert("Oops! Something went wrong!");
    }
  };

  const handleDownloadMP3 = (url) => {
    try {
      FileSaver.saveAs(url, "ttdl" + new Date().getTime() + ".mp3");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleReset = () => {
    setIsFetching(false);
    setInputText("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const item = getRandomBanner(banners);
      setRandomBanner(item);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-full max-w-5xl mx-auto px-3">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>TTDL - Free TikTok Video Downloader</title>
        <link rel="canonical" href="https://ttdl-six.vercel.app/" />
        <meta
          property="og:title"
          content="Free TikTok Video Downloader Without Watermark"
        />
        <meta
          property="og:site_name"
          content="Free TikTok Video Downloader Without Watermark"
        />
        <meta property="og:url" content="https://ttdl-six.vercel.app/" />
        <meta
          property="og:description"
          content="TTDL is a free TikTok Video Downloader without watermark website. It allows users to download their favorite TikTok videos without any watermark or logo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <script src="/assets/main.js"></script>
      </Helmet> */}
      <Navbar />
      <section className="py-8 sm:py-16 w-full h-auto flex items-center justify-center flex-col">
        <h1 className="text-slate-800 text-center font-extrabold text-3xl sm:text-5xl mb-3 sm:mb-8">
          TikTok Downloader
        </h1>
        <span className="text-slate-700 text-base sm:text-lg font-medium mb-6 sm:mb-8 text-center">
          Download your favourite TikTok videos without watermark
        </span>
        {isFetching ? (
          !loading ? (
            <div className="w-full flex items-center justify-center mb-10">
              <div className="w-full max-w-[350px] mx-auto flex flex-col gap-2">
                <Image
                  width={350}
                  height={350}
                  src={data?.cover}
                  className="w-full aspect-square object-cover object-center"
                />
                <button
                  onClick={() => handleDownloadMP4(data?.play)}
                  className="w-full h-12 flex items-center justify-center gap-2 text-white bg-slate-800 border-solid border-slate-800 border-[2px] disabled:opacity-70"
                >
                  Download MP4
                  <RxDownload className="text-xl" />
                </button>
                <button
                  onClick={() => handleDownloadMP3(data?.music_info?.play)}
                  className="w-full h-12 flex items-center justify-center gap-2 text-white bg-slate-800 border-solid border-slate-800 border-[2px]"
                >
                  Download MP3
                  <RxDownload className="text-xl" />
                </button>
                <button
                  onClick={handleReset}
                  className="w-full h-12 flex items-center justify-center gap-2 text-white bg-slate-800 border-solid border-slate-800 border-[2px]"
                >
                  Download More
                  <RxReset className="text-xl" />
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full flex items-center justify-center py-10 mb-10">
              <img
                src="/assets/loading.png"
                className="animate-spin w-24"
                alt="loading"
              />
            </div>
          )
        ) : (
          <form
            onSubmit={handleFetch}
            action=""
            className="w-full max-w-4xl flex justify-center gap-5 sm:gap-0 flex-col sm:flex-row items-center mb-5 sm:mb-10"
          >
            <div className="w-full flex flex-row items-center h-14 border-solid border-[3px] border-slate-800 px-2 sm:px-3 sm:border-r-0">
              <AiOutlineLink className="text-4xl pr-2 text-slate-400" />
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                name=""
                className="flex-1 w-full h-full text-base sm:text-lg placeholder:text-slate-500 pr-2 sm:pr-3 input"
                placeholder="Paste TikTok Video URL"
              />
              <div
                onClick={handlePaste}
                className="text-slate-800 font-medium h-10 px-2 flex items-center gap-1 justify-center border-[2px] border-solid border-slate-800 hover:text-white hover:bg-slate-800 cursor-pointer paste-btn"
              >
                {pasted ? (
                  <RxCross1 className="text-xl" />
                ) : (
                  <BiPaste className="text-xl" />
                )}
                <span className="hidden sm:flex text">
                  {inputText ? "Clear" : "Paste"}
                </span>
              </div>
            </div>
            <button className="px-4 h-14 font-semibold text-base w-full sm:w-[fit-content] text-white bg-slate-800">
              Download
            </button>
          </form>
        )}
        {msg && (
          <div className="max-w-4xl w-full h-12 bg-red-800 flex items-center justify-center mb-5 sm:mb-10">
            <span className="font-semibold text-center text-base text-white">
              {msg}
            </span>
          </div>
        )}
        {/* {randomBanner && <AdHeader randomBanner={randomBanner} />} */}
        <div className="flex sm:flex-row flex-col items-center justify-center gap-6 sm:gap-10">
          <span className="flex items-center text-lg font-bold gap-1 text-slate-800">
            <BsCheckLg className="text-2xl" />
            Free To Use
          </span>
          <span className="flex items-center text-lg font-bold gap-1 text-slate-800">
            <BsCheckLg className="text-2xl" />
            Unlimited Downloads
          </span>
          <span className="flex items-center text-lg font-bold gap-1 text-slate-800">
            <BsCheckLg className="text-2xl" />
            Fast Speed
          </span>
        </div>
      </section>
      {/* <section className="w-full py-8 flex flex-col items-center justify-center bg-slate-800 px-4">
        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 text-center">
          Download TTDL On Your Android Devices For Free
        </h3>
        <span className="text-slate-200 text-sm sm:text-base text-center mb-5">
          Get easier access to TTDL by downloading our app
        </span>
        <Link href="/" target="_blank">
          <img
            src="/assets/googleplay.png"
            className="w-40"
            alt="Google Play"
          />
        </Link>
      </section> */}
      <section id="howtouse" className="w-full py-10 sm:py-16">
        <div className="w-full text-center flex flex-col gap-2 mb-8">
          <h2 className="text-slate-800 text-2xl sm:text-3xl font-bold">
            How To Use
          </h2>
          <span className="text-slate-700 text-sm sm:text-base">
            Discover how to use TTDL to enhance your experience
          </span>
        </div>
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
            <Image
              width={300}
              height={300}
              src="/assets/1.png"
              className="max-w-[300px] w-full"
              alt="TTDL Step 1"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl sm:text-3xl font-bold text-center sm:text-start text-slate-800">
                1. Copy the TikTok Video URL
              </h3>
              <p className="text-slate-700 text-center sm:text-start">
                Open TikTok, locate desired watermark-free video, tap "Share"
                (arrow icon), choose "Copy Link" to save video URL to clipboard.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
            <div className="flex flex-col gap-3 order-1 sm:order-none">
              <h3 className="text-xl sm:text-3xl font-bold text-center sm:text-start text-slate-800">
                2. Visit the TTDL Website
              </h3>
              <p className="text-slate-700 text-center sm:text-start">
                Launch browser, enter www.ttdl.app in address bar, visit TTDL's
                site on computer or mobile.
              </p>
            </div>
            <Image
              width={300}
              height={300}
              src="/assets/2.png"
              className="max-w-[300px] w-full"
              alt="TTDL Step 2"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
            <Image
              width={300}
              height={300}
              src="/assets/3.png"
              className="max-w-[300px] w-full"
              alt="TTDL Step 3"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl sm:text-3xl font-bold text-center sm:text-start text-slate-800">
                3. Paste and Download the Video
              </h3>
              <p className="text-slate-700 text-center sm:text-start">
                Now locate "Paste TikTok Video URL" box, click/tap to activate,
                use Paste Icon to insert copied URL, then click/tap "Download."
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
            <div className="flex flex-col gap-3 order-1 sm:order-none">
              <h3 className="text-xl sm:text-3xl font-bold text-center sm:text-start text-slate-800">
                4. Download Your Watermark-Free TikTok Video
              </h3>
              <p className="text-slate-700 text-center sm:text-start">
                TTDL will process the URL, creating download link. Click/tap
                "Download MP4," choose save location. After download, open file
                for watermark-free TikTok video enjoyment!
              </p>
            </div>
            <Image
              width={300}
              height={300}
              src="/assets/4.png"
              className="max-w-[300px] w-full"
              alt="TTDL Step 4"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-10 sm:py-16">
        <div className="w-full text-center flex flex-col gap-2 mb-10">
          <h2 className="text-slate-800 text-2xl sm:text-3xl font-bold">
            {" "}
            FAQs{" "}
          </h2>
          <span className="text-slate-700 text-sm sm:text-base">
            What people want to know about i-Gram Instagram Downloader
          </span>
        </div>
        <div className="accordion w-full flex flex-col gap-5">
          {faqs.map((item, i) => (
            <div key={i} className="accordion-item bg-gray-100">
              <div className="accordion-item-header text-slate-800">
                {item?.question}
              </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content text-slate-700">
                  {item?.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
