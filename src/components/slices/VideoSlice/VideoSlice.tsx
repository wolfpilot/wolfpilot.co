import { useState, useEffect, useRef } from "react"

// Types
import { StaticImageData } from "next/image"

// Styles
import * as S from "./styles"
import { mq } from "@styles/utils/mediaQueries"

export interface Props {
  className?: string
  video: {
    src: string
    label: string
  }
  placeholder: {
    src: StaticImageData
    alt: string
  }
  fullWidth?: boolean
}

const VideoSlice: React.FC<Props> = ({
  className,
  video,
  placeholder,
  fullWidth = false,
}) => {
  const [isVideoInit, setIsVideoInit] = useState<boolean>(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!isVideoInit || !videoRef.current) return

    videoRef.current.controls = true
    videoRef.current.play()
  }, [isVideoInit])

  if (!video?.src || !video?.label || !placeholder?.src || !placeholder?.alt)
    return null

  // Handlers
  const handleOverlayBtnClick = () => {
    setIsVideoInit(true)
  }

  return (
    <S.Wrapper className={className} $fullWidth={fullWidth}>
      <S.Placeholder
        src={placeholder.src}
        sizes={`
          ${
            fullWidth
              ? `
                100vw
              `
              : `
                (min-width: ${mq.breakpoints.L}px) 1440px,
                100vw,
              `
          }
        `}
        alt={placeholder.alt}
        $isVideoInit={isVideoInit}
      />

      <S.Video
        ref={videoRef}
        loop
        muted
        preload="none"
        aria-label={video.label}
      >
        <source src={`${video.src}.mp4`} type="video/mp4" />
        <source src={`${video.src}.webm`} type="video/webm" />
        {`Oops, it looks like your browser doesn't support HTML5 video in MP4 or
        WebM formats.`}
      </S.Video>

      <S.OverlayBtn $isVideoInit={isVideoInit} onClick={handleOverlayBtnClick}>
        <S.Icon type="play" />
      </S.OverlayBtn>
    </S.Wrapper>
  )
}

export default VideoSlice
