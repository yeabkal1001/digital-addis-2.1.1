import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  onMediaSizeChange?: (value: number) => void
  onBorderThicknessChange?: (value: number) => void
  onBorderSizeChange?: (value: number) => void
  showControls?: boolean
  label?: string
  showFrame: boolean
  autoplayMode: "all" | "hover"
  isHovered: boolean
}

export function FrameComponent({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls = false,
  label = "",
  showFrame,
  autoplayMode,
  isHovered,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    // Handle autoplay based on mode
    if (autoplayMode === "all") {
      video.play().catch(() => {
        // Autoplay failed, which is expected in some browsers
      })
    } else if (autoplayMode === "hover" && isHovered) {
      video.play().catch(() => {
        // Autoplay failed
      })
    } else if (autoplayMode === "hover" && !isHovered) {
      video.pause()
    }

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [autoplayMode, isHovered])

  const frameStyle = {
    width,
    height,
  }

  const videoStyle = {
    width: `${mediaSize * 100}%`,
    height: `${mediaSize * 100}%`,
    transform: `translate(-50%, -50%) scale(${mediaSize})`,
  }

  return (
    <div className={`relative overflow-hidden bg-gray-900 ${className}`} style={frameStyle}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transition-all duration-400 ease-out"
        style={videoStyle}
        autoPlay={autoplayMode === "all"}
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Frame Overlay */}
      {showFrame && (
        <>
          {/* Corner pieces */}
          <img
            src={corner}
            alt="Corner frame"
            className="absolute top-0 left-0 z-10 pointer-events-none"
            style={{
              width: `${borderSize}px`,
              height: `${borderSize}px`,
            }}
          />
          <img
            src={corner}
            alt="Corner frame"
            className="absolute top-0 right-0 z-10 pointer-events-none transform rotate-90"
            style={{
              width: `${borderSize}px`,
              height: `${borderSize}px`,
            }}
          />
          <img
            src={corner}
            alt="Corner frame"
            className="absolute bottom-0 right-0 z-10 pointer-events-none transform rotate-180"
            style={{
              width: `${borderSize}px`,
              height: `${borderSize}px`,
            }}
          />
          <img
            src={corner}
            alt="Corner frame"
            className="absolute bottom-0 left-0 z-10 pointer-events-none transform -rotate-90"
            style={{
              width: `${borderSize}px`,
              height: `${borderSize}px`,
            }}
          />

          {/* Horizontal edges */}
          <img
            src={edgeHorizontal}
            alt="Horizontal edge"
            className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
            style={{
              height: `${borderThickness}px`,
              width: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={edgeHorizontal}
            alt="Horizontal edge"
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none transform rotate-180"
            style={{
              height: `${borderThickness}px`,
              width: "100%",
              objectFit: "cover",
            }}
          />

          {/* Vertical edges */}
          <img
            src={edgeVertical}
            alt="Vertical edge"
            className="absolute top-0 bottom-0 left-0 z-10 pointer-events-none"
            style={{
              width: `${borderThickness}px`,
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={edgeVertical}
            alt="Vertical edge"
            className="absolute top-0 bottom-0 right-0 z-10 pointer-events-none transform rotate-180"
            style={{
              width: `${borderThickness}px`,
              height: "100%",
              objectFit: "cover",
            }}
          />
        </>
      )}

      {/* Overlay for better visibility */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-400 ${
        isHovered ? 'opacity-20' : 'opacity-40'
      }`} />

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 border-2 border-cyan-400 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Controls Overlay */}
      {showControls && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-75 p-4 flex flex-col justify-center space-y-4 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3 className="text-white font-bold text-lg">{label}</h3>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Media Size: {mediaSize.toFixed(2)}
            </label>
            <Slider
              min={0.5}
              max={2}
              step={0.01}
              value={[mediaSize]}
              onValueChange={(value) => onMediaSizeChange?.(value[0])}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Border Thickness: {borderThickness}px
            </label>
            <Slider
              min={0}
              max={50}
              step={1}
              value={[borderThickness]}
              onValueChange={(value) => onBorderThicknessChange?.(value[0])}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Border Size: {borderSize}px
            </label>
            <Slider
              min={20}
              max={200}
              step={5}
              value={[borderSize]}
              onValueChange={(value) => onBorderSizeChange?.(value[0])}
            />
          </div>

          <div className="text-sm text-gray-300">
            Status: {isPlaying ? "Playing" : "Paused"}
          </div>
        </motion.div>
      )}
    </div>
  )
}