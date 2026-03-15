// const team = await prisma.team.findFirst({
//   where: {
//     organizationId: organization.id,
//     teammembers: {
//       some: {
//         userId: session.session.userId,
//       },
//     },
//   },
//   orderBy: {
//     createdAt: "asc",
//   },
// });

// if (!team) {
//   redirect({
//     href: {
//       pathname: "/org/[orgSlug]/dashboard",
//       params: {
//         orgSlug: organization.slug,
//       },
//     },
//     locale,
//   });
//   return;
// }

// redirect({
//   href: {
//     pathname: "/org/[orgSlug]/team/[teamId]/dashboard",
//     params: {
//       orgSlug: organization.slug,
//       teamId: team.id,
//     },
//   },
//   locale,
// });

const TeamIdPage = () => {
  return <div>Team page</div>;
};

export default TeamIdPage;
