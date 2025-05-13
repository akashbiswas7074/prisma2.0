import HTMLFlipBook from "react-pageflip";
import React, { Component, createRef } from "react";
import Zoom from 'react-medium-image-zoom';
import { CoverPage, CoverBack, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42,} from '../imports/Bhor-24';  // Import images
import 'react-medium-image-zoom/dist/styles.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import pdfUrl from "/prisma2 (1).pdf"; // Import the PDF
// import QR from "@assets/qr.png";
// import pdf from "@assets/Bhor24/bhor24.pdf"; // This line can be removed or kept if you plan to use it later

// Define types for props
interface PageCoverProps {
  children: React.ReactNode;
}

const onButtonClick = () => {
  const link = document.createElement("a");
  link.href = pdfUrl; // Use the imported pdfUrl
  link.download = "CSE_Magazine_2025.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const PageCover = React.forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

// Define types for Page props
interface PageProps {
  children: React.ReactNode;
  number: number;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

// Define the types for the state in the DemoBook class
interface DemoBookState {
  page: number;
  totalPage: number;
}

// Define the type for HTMLFlipBook ref that exposes `pageFlip` methods
interface HTMLFlipBookRef {
  pageFlip(): {
    flipNext: () => void;
    turnToPrevPage: () => void;
  };
}

class DemoBook extends Component<{}, DemoBookState> {
  flipBook: React.RefObject<HTMLFlipBookRef> = createRef();

  constructor(props: {}) {
    super(props);
    this.state = {
      page: 0,
      totalPage: 44,  // Set total pages here (or dynamically based on pages array)
    };
  }

  nextButtonClick = () => {
    // TypeScript will now recognize the pageFlip method
    if (this.flipBook.current) {
      this.flipBook.current.pageFlip().flipNext();
    }
  };

  prevButtonClick = () => {
    // TypeScript will now recognize the pageFlip method
    if (this.flipBook.current) {
      this.flipBook.current.pageFlip().turnToPrevPage();
    }
  };

  onPage = (e: { data: number }) => {
    this.setState({
      page: e.data,
    });
  };

  render() {
    // Define pages content
    const pages = [
      { type: 'cover', content: CoverPage, number: 0 },  // First cover
      { type: 'poem', content: p1, number: 1 },
      { type: 'poem', content: p2, number: 2 },
      { type: 'poem', content: p3, number: 3 },
      { type: 'poem', content: p4, number: 4 },
      { type: 'poem', content: p5, number: 5 },
      { type: 'poem', content: p6, number: 6 },
      { type: 'poem', content: p7, number: 7 },
      { type: 'poem', content: p8, number: 8 },
      { type: 'poem', content: p9, number: 9 },
      { type: 'poem', content: p10, number: 10 },
      { type: 'poem', content: p11, number: 11 },
      { type: 'poem', content: p12, number: 12 },
      { type: 'poem', content: p13, number: 13 },
      { type: 'poem', content: p14, number: 14 },
      { type: 'poem', content: p15, number: 15 },
      { type: 'poem', content: p16, number: 16 },
      { type: 'poem', content: p17, number: 17 },
      { type: 'poem', content: p18, number: 18 },
      { type: 'poem', content: p19, number: 19 },
      { type: 'poem', content: p20, number: 20 },
      { type: 'poem', content: p21, number: 21 },
      { type: 'poem', content: p22, number: 22 },
      { type: 'poem', content: p23, number: 23 },
      { type: 'poem', content: p24, number: 24 },
      { type: 'poem', content: p25, number: 25 },
      { type: 'poem', content: p26, number: 26 },
      { type: 'poem', content: p27, number: 27 },
      { type: 'poem', content: p28, number: 28 },
      { type: 'poem', content: p29, number: 29 },
      { type: 'poem', content: p30, number: 30 },
      { type: 'poem', content: p31, number: 31 },
      { type: 'poem', content: p32, number: 32 },
      { type: 'poem', content: p33, number: 33 },
      { type: 'poem', content: p34, number: 34 },
      { type: 'poem', content: p35, number: 35 },
      { type: 'poem', content: p36, number: 36 },
      { type: 'poem', content: p37, number: 37 },
      { type: 'poem', content: p38, number: 38 },
      { type: 'poem', content: p39, number: 39 },
      { type: 'poem', content: p40, number: 40 },
      { type: 'poem', content: p41, number: 41 },
      { type: 'poem', content: p42, number: 42 },
      { type: 'cover', content: CoverBack, number: 43 }  // Last cover
    ];
    

    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen top-0 bottom-0 overflow-hidden">
        <div className="h-fit w-fit flex flex-col lg:container justify-center items-center">
          <HTMLFlipBook
            width={420}
            height={600}
            size="stretch"
            minWidth={361}
            maxWidth={370}
            minHeight={450}
            maxHeight={433}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            autoSize={true}
            flippingTime={960}
            onFlip={this.onPage}
            className="demo-book"
            ref={this.flipBook}
            clickEventForward={true}
            showPageCorners={true}
            disableFlipByClick={true}
            startPage={0}
            drawShadow={true}
            usePortrait={true}
            style={{ margin: '0 auto', display: 'block' }}
            startZIndex={1}
            useMouseEvents={true}
            swipeDistance={50}
          >
            {pages.map((pageData, index) => (
              <Page key={index} number={pageData.number}>
                {pageData.type === 'cover' ? (
                  <Zoom>
                    <img
                      src={pageData.content}
                      alt={`Cover ${pageData.number + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    />
                  </Zoom>
                ) : (
                  <Zoom>
                    <img
                      src={pageData.content}
                      alt={`Page ${pageData.number + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    />
                  </Zoom>
                )}
              </Page>
            ))}
            <PageCover>
              <div className="flex flex-col justify-between items-center p-4">
                <div className="mt-0 mb-4 text-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Prisma 2.0</h2>
                  <p className="text-md sm:text-lg mt-1">The annual technical magazine by the Department of Computer Science and Engineering, KGEC.</p>
                </div>
                <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold mt-2 sm:mt-4">Thank you for watching</h3>
                <h3 className="text-md sm:text-lg mt-1 sm:mt-2">Get your e-copy</h3>
                <button
                  className="mt-4 font-bold bg-yellow-500 text-gray-800 text-md sm:text-lg px-6 sm:px-8 py-2 border border-yellow-600 hover:bg-yellow-600 hover:border-yellow-700 transition duration-300 rounded-md shadow-md"
                  onClick={onButtonClick}
                >
                  Download PDF
                </button>
              </div>
            </PageCover>
          </HTMLFlipBook>

          <div className="container">
            <div>
              <button
                type="button"
                onClick={this.prevButtonClick}
                aria-label="Previous Page"
                className="z-[2] absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-300 bg-gray-600"
              >
                <IoIosArrowBack className="text-4xl" />
              </button>

              <button
                type="button"
                onClick={this.nextButtonClick}
                aria-label="Next Page"
                className="z-[2] absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-300 bg-gray-600"
              >
                <IoIosArrowForward className="text-4xl" />
              </button>
            </div>
            <div className="text-center text-2xl">
              <i>{this.state.page + 1} / {this.state.totalPage}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoBook;
