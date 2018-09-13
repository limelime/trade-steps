date_string=$(date +"%Y-%m-%d.%0k.%M.%S")
base_dir="release"
	mkdir -p "${base_dir}"
output_file="${base_dir}/trade-steps_${date_string}.tar.gz"

tar -czvf "${output_file}" trade-steps > /dev/null
echo "${output_file} is created."