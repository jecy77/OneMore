export default function File({ setFile }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-1">사진 첨부</label>
      <input
        type="file"
        accept="image/*"
        className="w-full"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
}
