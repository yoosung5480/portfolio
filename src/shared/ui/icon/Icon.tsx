type IconName = 'github' | 'mail' | 'link' | 'down' | 'back' | 'layers';
const paths: Record<IconName, React.ReactNode> = {
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 .9a11.1 11.1 0 0 0-3.5 21.63c.55.1.76-.24.76-.53v-2.06c-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.7.08-.68.08-.68 1.12.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.43-2.21 1.14-2.99-.12-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.63 10.63 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"
    />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3.5 6 8.5 6.4L20.5 6" />
    </>
  ),
  link: (
    <>
      <path d="M14 3.7h6.3V10M20 4l-9 9" />
      <path d="M11 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-6" />
    </>
  ),
  down: <path d="M12 3v16m-6-6 6 6 6-6" />,
  back: <path d="M20 12H4m7-7-7 7 7 7" />,
  layers: (
    <>
      <path d="m2 7 10-5 10 5-10 5L2 7Zm0 5 10 5 10-5M2 17l10 5 10-5" />
    </>
  ),
};

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
