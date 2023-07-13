"use client";

import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
  HatenaIcon,
} from "react-share";

type ShareProps = {
  title: string;
  url: string;
};

export default function Share({ title, url }: { title: string; url: string }) {
  return (
    <div>
      <div className="m-2 inline">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={45} round={false} />
        </TwitterShareButton>
      </div>

      <div className="m-2 inline">
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={45} round={false} />
        </FacebookShareButton>
      </div>

      <div className="m-2 inline">
        <LineShareButton url={url} title={title}>
          <LineIcon size={45} round={false} />
        </LineShareButton>
      </div>

      <div className="m-2 inline">
        <HatenaShareButton url={url} title={title}>
          <HatenaIcon size={45} round={false} />
        </HatenaShareButton>
      </div>
    </div>
  );
}
