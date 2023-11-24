import AnnouncementCard from "./announcementCard/AnnouncementCard";

function UserAnnouncements() {
  return (
    <div>
      <p>this is header </p>
      <div className="grid grid-cols-1 gap-2 p-6 md:grid-cols-2 lg:grid-cols-3">
        <AnnouncementCard></AnnouncementCard>
        <AnnouncementCard></AnnouncementCard>
        <AnnouncementCard></AnnouncementCard>
      </div>
    </div>
  );
}

export default UserAnnouncements;
