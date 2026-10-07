import React from 'react'
import Image from "next/image";
const page = () => {
     const avatarPlaceholder = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%23e2e8f0'/><text x='50%' y='55%' font-size='35' dominant-baseline='middle' text-anchor='middle'>👤</text></svg>";
  const postPlaceholder = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='100%' height='100%' fill='%23cbd5e1'/><text x='50%' y='55%' font-size='40' dominant-baseline='middle' text-anchor='middle' fill='%2364748b'>POST</text></svg>";

  const userProfile = {
    username: "jane_doe",
    name: "Jane Doe",
    bio: "✨ UI/UX Designer | San Francisco, CA",
    avatar: avatarPlaceholder,
    stats: {
      posts: 12,
      followers: 250,
      following: 180,
    },
    posts: [
      { id: 1, image: postPlaceholder },
      { id: 2, image: postPlaceholder },
      { id: 3, image: postPlaceholder },
    ],
  };

  return (
    <div>
            <div className="max-w-2xl mx-auto p-4 space-y-6">
      
      {/* Profile Header */}
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-300">
          <Image 
            src={userProfile.avatar} 
            alt={userProfile.name} 
            fill 
            className="object-cover" 
            unoptimized
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">{userProfile.username}</h1>
          <p className="font-semibold text-sm text-gray-800">{userProfile.name}</p>
          <p className="text-sm text-gray-600">{userProfile.bio}</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex justify-around border-y py-2 text-center text-sm border-gray-200">
        <div><span className="font-bold">{userProfile.stats.posts}</span> posts</div>
        <div><span className="font-bold">{userProfile.stats.followers}</span> followers</div>
        <div><span className="font-bold">{userProfile.stats.following}</span> following</div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-2">
        {userProfile.posts.map((post) => (
          <div key={post.id} className="relative aspect-square bg-gray-200">
            <Image 
              src={post.image} 
              alt={'Post ${post.id}'} 
              fill 
              className="object-cover" 
              unoptimized
            />
          </div>
        ))}
      </div>

    </div>
  




    </div>
  )
}

export default page