import React, { useState, useRef } from 'react';
import { X, Upload, Link as LinkIcon, RotateCcw, Check, Image as ImageIcon, AlertCircle } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  defaultPhoto: string;
  onSavePhoto: (photoDataUrl: string) => void;
  onResetPhoto: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  defaultPhoto,
  onSavePhoto,
  onResetPhoto,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState<string>(currentPhoto);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (PNG, JPG, WEBP, etc.)');
      return;
    }

    // Limit to 10MB
    if (file.size > 10 * 1024 * 1024) {
      setError('File size exceeds 10MB. Please choose a smaller image.');
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setPreviewPhoto(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setError('Please enter a valid image URL');
      return;
    }
    setError(null);
    setPreviewPhoto(urlInput.trim());
  };

  const handleSave = () => {
    if (!previewPhoto) return;
    onSavePhoto(previewPhoto);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    onResetPhoto();
    setPreviewPhoto(defaultPhoto);
    setUrlInput('');
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172033]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-stone-200 animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
              <ImageIcon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#172033]">
                Update Your Photo
              </h3>
              <p className="text-xs text-[#596273]">
                Upload your original picture or paste a photo link
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tab Selector */}
          <div className="flex rounded-lg bg-stone-100 p-1">
            <button
              onClick={() => {
                setActiveTab('upload');
                setError(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'upload'
                  ? 'bg-white text-[#172033] shadow-xs'
                  : 'text-[#596273] hover:text-[#172033]'
              }`}
            >
              <Upload className="h-3.5 w-3.5" />
              <span>Upload File</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('url');
                setError(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'url'
                  ? 'bg-white text-[#172033] shadow-xs'
                  : 'text-[#596273] hover:text-[#172033]'
              }`}
            >
              <LinkIcon className="h-3.5 w-3.5" />
              <span>Image URL</span>
            </button>
          </div>

          {/* Interactive Input based on Tab */}
          {activeTab === 'upload' ? (
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-stone-50/70 p-6 text-center hover:border-[#3B82F6] hover:bg-blue-50/30 transition-all cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-2xs group-hover:scale-110 transition-transform">
                  <Upload className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <p className="mt-3 text-sm font-medium text-[#172033]">
                  Click to select photo from device
                </p>
                <p className="mt-1 text-xs text-[#596273]">
                  PNG, JPG, JPEG, WEBP up to 10MB
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#172033]">
                Paste Direct Image URL
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-xs text-[#172033] placeholder:text-stone-400 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                />
                <button
                  onClick={handleApplyUrl}
                  className="rounded-xl bg-[#172033] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#25324d] transition-colors"
                >
                  Load
                </button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-600">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Live Preview */}
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#596273] mb-3">
              Live Preview
            </span>
            <div className="flex items-center gap-5">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg border border-stone-300 bg-white shadow-xs">
                <img
                  src={previewPhoto}
                  alt="Preview"
                  className="h-full w-full object-cover object-center"
                  onError={() => setError('Could not load image. Please verify file or URL.')}
                />
              </div>
              <div className="space-y-1.5 text-xs text-[#596273]">
                <p className="font-medium text-[#172033]">
                  Hero Portrait Preview
                </p>
                <p>
                  This will be shown on the home page and saved in your browser.
                </p>
                {previewPhoto !== defaultPhoto && (
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-amber-700 hover:text-amber-800 pt-1"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reset to original portrait</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-stone-100 bg-stone-50/50 px-6 py-4">
          <button
            onClick={handleReset}
            className="text-xs font-medium text-[#596273] hover:text-[#172033] transition-colors"
          >
            Reset
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-[#172033] hover:bg-stone-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSuccess}
              className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2563EB] transition-colors shadow-xs"
            >
              {isSuccess ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Photo</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
