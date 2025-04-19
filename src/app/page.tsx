import AuthContainer from '@/components/AuthContainer';
import PongPreview from '@/components/PongPreview';

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-6 gap-6">
      <AuthContainer />
      <PongPreview />
    </div>
  );
}
